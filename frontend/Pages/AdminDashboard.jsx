import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import toast from 'react-hot-toast'

const PAGE_SIZE = 10

const initialPageState = {
  items: [],
  total: 0,
  page: 1,
  limit: PAGE_SIZE,
  total_pages: 1,
}

function formatDate(value) {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function badgeClasses(value) {
  const normalized = String(value || '').toLowerCase()
  if (normalized === 'completed') return 'bg-brand-navy text-white'
  if (normalized === 'approved') return 'bg-brand-mint text-brand-navy'
  if (normalized === 'denied') return 'bg-brand-gray text-brand-navy'
  return 'bg-white text-brand-navy border border-brand-gray'
}

function readClasses(isRead) {
  return isRead ? 'bg-brand-mint text-brand-navy' : 'bg-white text-brand-navy border border-brand-gray'
}

function isFinalBookingStatus(status) {
  return ['approved', 'completed', 'denied'].includes(String(status || '').toLowerCase())
}

function Detail({ label, value }) {
  return (
    <div className="rounded-2xl border border-brand-gray bg-brand-mint/55 p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-brand-navy/55">{label}</div>
      <div className="mt-2 whitespace-pre-wrap text-sm text-brand-navy">{value}</div>
    </div>
  )
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [authReady, setAuthReady] = useState(false)
  const [bookingsPage, setBookingsPage] = useState(1)
  const [messagesPage, setMessagesPage] = useState(1)
  const [bookingData, setBookingData] = useState(initialPageState)
  const [messageData, setMessageData] = useState(initialPageState)
  const [counts, setCounts] = useState({ bookings: 0, messages: 0 })
  const [modalState, setModalState] = useState({
    open: false,
    type: null,
    loading: false,
    data: null,
  })
  const [logoutModalOpen, setLogoutModalOpen] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const loadCounts = async () => {
    const [bookings, messages] = await Promise.all([
      api.get('/bookings?page=1&limit=1', token),
      api.get('/contact?page=1&limit=1', token),
    ])
    setCounts({
      bookings: bookings.total || 0,
      messages: messages.total || 0,
    })
  }

  const loadTabData = async () => {
    setLoading(true)
    try {
      if (activeTab === 'overview') {
        await loadCounts()
      } else if (activeTab === 'bookings') {
        const data = await api.get(`/bookings?page=${bookingsPage}&limit=${PAGE_SIZE}`, token)
        setBookingData(data)
      } else if (activeTab === 'messages') {
        const data = await api.get(`/contact?page=${messagesPage}&limit=${PAGE_SIZE}`, token)
        setMessageData(data)
      }
    } catch (error) {
      if (String(error?.message || '').includes('401')) {
        localStorage.removeItem('token')
        navigate('/admin')
        return
      }
      toast.error('Failed to load admin data')
    } finally {
      setLoading(false)
    }
  }

  const refreshCurrentTab = async () => {
    if (activeTab === 'overview') {
      await loadCounts()
      return
    }
    if (activeTab === 'bookings') {
      const data = await api.get(`/bookings?page=${bookingsPage}&limit=${PAGE_SIZE}`, token)
      setBookingData(data)
      return
    }
    if (activeTab === 'messages') {
      const data = await api.get(`/contact?page=${messagesPage}&limit=${PAGE_SIZE}`, token)
      setMessageData(data)
    }
  }

  const openRecord = async (type, record) => {
    setModalState({ open: true, type, loading: true, data: null })
    try {
      let data = record
      if (type === 'booking') data = await api.get(`/bookings/${record.id}`, token)
      if (type === 'message') data = await api.get(`/contact/${record.id}`, token)
      setModalState({ open: true, type, loading: false, data })
      if (type === 'message') await refreshCurrentTab()
    } catch (error) {
      if (String(error?.message || '').includes('401')) {
        localStorage.removeItem('token')
        navigate('/admin')
        return
      }
      toast.error('Failed to open record')
      setModalState({ open: false, type: null, loading: false, data: null })
    }
  }

  const updateBookingStatus = async (bookingId, status) => {
    try {
      await api.patch(`/bookings/${bookingId}/status?status=${encodeURIComponent(status)}`, {}, token)
      toast.success(`Booking marked as ${status}`)
      await refreshCurrentTab()
      if (modalState.open && modalState.type === 'booking' && modalState.data?.id === bookingId) {
        setModalState((current) => ({
          ...current,
          data: { ...current.data, status },
        }))
      }
    } catch (error) {
      toast.error('Failed to update booking status')
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/admin')
      return
    }
    setAuthReady(true)
  }, [navigate, token])

  useEffect(() => {
    if (!authReady) return
    loadTabData()
  }, [activeTab, bookingsPage, messagesPage, authReady])

  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'messages', label: 'Messages' },
  ]

  const renderOverview = () => (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="card p-6 text-center">
        <div className="text-4xl">📦</div>
        <div className="mt-3 text-lg font-bold text-brand-navy">Total Bookings</div>
        <div className="mt-2 text-4xl font-extrabold text-brand-navy">{counts.bookings}</div>
      </div>
      <div className="card p-6 text-center">
        <div className="text-4xl">✉️</div>
        <div className="mt-3 text-lg font-bold text-brand-navy">Contact Messages</div>
        <div className="mt-2 text-4xl font-extrabold text-brand-navy">{counts.messages}</div>
      </div>
      <div className="card p-6 text-center">
        <div className="text-4xl">✨</div>
        <div className="mt-3 text-lg font-bold text-brand-navy">Service Style</div>
        <div className="mt-2 text-base font-semibold text-brand-teal">Premium cleaning</div>
      </div>
    </div>
  )

  const renderBookings = () => (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left">
          <thead className="bg-brand-mint/70 text-xs uppercase tracking-[0.22em] text-brand-navy/60">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray">
            {bookingData.items.map((booking) => (
              <tr key={booking.id} className="hover:bg-brand-mint/35">
                <td className="px-4 py-4">
                  <div className="font-semibold text-brand-navy">{booking.full_name}</div>
                  <div className="text-sm text-brand-navy/60">{booking.email}</div>
                </td>
                <td className="px-4 py-4 text-sm text-brand-navy/80">{booking.service_type}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses(booking.status)}`}>
                    {booking.status || 'pending'}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-brand-navy/65">{formatDate(booking.created_at)}</td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => openRecord('booking', booking)} className="btn-secondary px-4 py-2 text-sm">
                      View
                    </button>
                    {!isFinalBookingStatus(booking.status) && (
                      <>
                        <button type="button" onClick={() => updateBookingStatus(booking.id, 'approved')} className="btn-primary px-4 py-2 text-sm">
                          Approve
                        </button>
                        <button type="button" onClick={() => updateBookingStatus(booking.id, 'completed')} className="btn-secondary px-4 py-2 text-sm">
                          Complete
                        </button>
                        <button type="button" onClick={() => updateBookingStatus(booking.id, 'denied')} className="rounded-full border border-brand-gray bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-mint">
                          Deny
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {bookingData.items.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-10 text-center text-brand-navy/60">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="border-t border-brand-gray p-4">
        <Pagination
          pageState={bookingData}
          onPrev={() => setBookingsPage((current) => Math.max(current - 1, 1))}
          onNext={() => setBookingsPage((current) => Math.min(current + 1, bookingData.total_pages))}
        />
      </div>
    </div>
  )

  const renderMessages = () => (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left">
          <thead className="bg-brand-mint/70 text-xs uppercase tracking-[0.22em] text-brand-navy/60">
            <tr>
              <th className="px-4 py-3">Sender</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Read</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-gray">
            {messageData.items.map((message) => (
              <tr key={message.id} className="hover:bg-brand-mint/35">
                <td className="px-4 py-4">
                  <div className="font-semibold text-brand-navy">{message.name}</div>
                  <div className="text-sm text-brand-navy/60">{message.email}</div>
                </td>
                <td className="px-4 py-4 text-sm text-brand-navy/80">{message.subject}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${readClasses(message.is_responded)}`}>
                    {message.is_responded ? 'Read' : 'Unread'}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-brand-navy/65">{formatDate(message.created_at)}</td>
                <td className="px-4 py-4 text-right">
                  <button type="button" onClick={() => openRecord('message', message)} className="btn-secondary px-4 py-2 text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
            {messageData.items.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-10 text-center text-brand-navy/60">
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="border-t border-brand-gray p-4">
        <Pagination
          pageState={messageData}
          onPrev={() => setMessagesPage((current) => Math.max(current - 1, 1))}
          onNext={() => setMessagesPage((current) => Math.min(current + 1, messageData.total_pages))}
        />
      </div>
    </div>
  )

  const renderContent = useMemo(() => {
    if (activeTab === 'overview') return renderOverview()
    if (activeTab === 'bookings') return renderBookings()
    if (activeTab === 'messages') return renderMessages()
    return null
  }, [activeTab, bookingData, messageData, counts])

  if (!authReady) return null

  return (
    <div className="min-h-screen bg-brand-mint/35">
      <div className="sticky top-0 z-40 border-b border-brand-gray bg-white/90 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setSidebarOpen(true)} className="rounded-full border border-brand-gray bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
            Menu
          </button>
          <div className="font-bold text-brand-navy">Admin Dashboard</div>
          <button type="button" onClick={() => setLogoutModalOpen(true)} className="text-sm font-semibold text-brand-teal">
            Logout
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <button type="button" aria-label="Close sidebar" className="fixed inset-0 z-40 bg-brand-navy/45 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-brand-gray bg-white shadow-xl transition-transform duration-300 md:static md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-navy">Giawest Cleaning</div>
                <div className="text-xs text-brand-teal">Admin console</div>
              </div>
              <button type="button" onClick={() => setSidebarOpen(false)} className="text-2xl leading-none text-brand-navy md:hidden">
                ×
              </button>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeTab === item.id ? 'bg-brand-mint text-brand-navy' : 'text-brand-navy/72 hover:bg-brand-mint/55'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setLogoutModalOpen(true)}
              className="mt-auto rounded-2xl border border-brand-gray bg-white px-4 py-3 text-left text-sm font-semibold text-brand-navy hover:bg-brand-mint/55"
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8">
          <div className="mb-6 hidden items-center justify-between md:flex">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-navy capitalize">{activeTab}</h1>
              <p className="text-brand-navy/65">Manage bookings and contact messages.</p>
            </div>
          </div>

          {loading ? (
            <div className="py-20 text-center text-brand-navy/65">Loading...</div>
          ) : (
            renderContent
          )}
        </main>
      </div>

      {modalState.open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-navy/55 p-0 md:items-center md:p-4">
          <div className="max-h-[92vh] w-full max-w-none overflow-hidden rounded-t-[2rem] bg-white shadow-2xl md:max-w-2xl md:rounded-[2rem]">
            {modalState.loading ? (
              <div className="p-8 text-center text-brand-navy/65">Loading...</div>
            ) : (
              <div className="max-h-[92vh] overflow-y-auto p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-brand-navy">
                      {modalState.type === 'booking' ? 'Booking Details' : 'Contact Message'}
                    </h2>
                    <p className="mt-1 text-sm text-brand-navy/60">Detailed record view.</p>
                  </div>
                  <button type="button" onClick={() => setModalState({ open: false, type: null, loading: false, data: null })} className="text-3xl leading-none text-brand-navy/55">
                    ×
                  </button>
                </div>

                {modalState.type === 'booking' && modalState.data && (
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Detail label="Name" value={modalState.data.full_name} />
                      <Detail label="Email" value={modalState.data.email} />
                      <Detail label="Phone" value={modalState.data.phone} />
                      <Detail label="Service" value={modalState.data.service_type} />
                      <Detail label="Preferred Date" value={modalState.data.preferred_date} />
                      <Detail label="Preferred Time" value={modalState.data.preferred_time} />
                    </div>
                    <Detail label="Address" value={modalState.data.address} />
                    <Detail label="Instructions" value={modalState.data.special_instructions || 'None'} />
                    <div className="flex flex-wrap gap-3 pt-2">
                      {!isFinalBookingStatus(modalState.data.status) && (
                        <>
                          <button type="button" onClick={() => updateBookingStatus(modalState.data.id, 'approved')} className="btn-primary">
                            Approve
                          </button>
                          <button type="button" onClick={() => updateBookingStatus(modalState.data.id, 'completed')} className="btn-secondary">
                            Complete
                          </button>
                          <button type="button" onClick={() => updateBookingStatus(modalState.data.id, 'denied')} className="rounded-full border border-brand-gray bg-white px-5 py-3 font-semibold text-brand-navy hover:bg-brand-mint">
                            Deny
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {modalState.type === 'message' && modalState.data && (
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Detail label="Name" value={modalState.data.name} />
                      <Detail label="Email" value={modalState.data.email} />
                      <Detail label="Phone" value={modalState.data.phone || 'Not provided'} />
                      <Detail label="Subject" value={modalState.data.subject} />
                    </div>
                    <Detail label="Message" value={modalState.data.message} />
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${readClasses(modalState.data.is_responded)}`}>
                      {modalState.data.is_responded ? 'Read' : 'Unread'}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {logoutModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-navy/60 p-4">
          <div className="w-full max-w-md rounded-[2rem] bg-white shadow-2xl">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-brand-navy">Log out?</h2>
              <p className="mt-2 text-sm leading-6 text-brand-navy/65">
                You will be signed out of the admin area and returned to the login screen.
              </p>
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setLogoutModalOpen(false)}
                  className="rounded-full border border-brand-gray bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mint"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('token')
                    setLogoutModalOpen(false)
                    navigate('/admin')
                  }}
                  className="btn-primary"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Pagination({ pageState, onPrev, onNext }) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-sm text-brand-navy/65">
        Page {pageState.page} of {pageState.total_pages} · {pageState.total} total records
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={pageState.page <= 1}
          className="rounded-full border border-brand-gray bg-white px-4 py-2 text-sm font-semibold text-brand-navy disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={pageState.page >= pageState.total_pages}
          className="rounded-full border border-brand-gray bg-white px-4 py-2 text-sm font-semibold text-brand-navy disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}
