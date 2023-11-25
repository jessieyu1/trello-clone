import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



const Home = React.lazy(() => import('../pages/Home'))
const SignUp = React.lazy(() => import('../pages/Register'))
const Login= React.lazy(() => import('../pages/Login'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        ></Route>
        {/*定义404路由 */}
        <Route
          path="/signup"
          element={
            <Suspense>
              <SignUp />
            </Suspense>
          }
        ></Route>
        {/*未匹配的路由使用Navigate重定向到此页面，这里即notFound.jsx */}
        <Route path="/*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
