import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen w-full bg-slate-100 text-gray-900 flex items-center justify-center">
      <Component {...pageProps} />
    </div>
  )
}
