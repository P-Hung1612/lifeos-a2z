import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useHealthCheck } from './hooks/useHealthCheck'

function App() {
  const { data, isLoading, error } = useHealthCheck();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">LifeOS-A2Z</h1>

        {isLoading && <p className="text-gray-600">Đang kết nối đến backend...</p>}

        {error && (
          <p className="text-red-600">
            Lỗi kết nối: {(error as any).message}
            <br />
            <small>Check xem backend có đang chạy port 5000 không nhé!</small>
          </p>
        )}

        {data && (
          <div className="mt-6">
            <p className="text-2xl text-green-600 font-semibold mb-2">Kết nối thành công! 🎉</p>
            <p className="text-gray-700 bg-gray-100 px-4 py-2 rounded inline-block">
              {data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
