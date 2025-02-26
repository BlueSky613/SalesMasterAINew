/* eslint-disable prettier/prettier */
import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import Home from './pages/Home'
import ChatNew from './pages/ChatNew'
import Chat from './pages/Chat'
import Settings from './pages/Settings'
import Group from './pages/Group'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path='dashboard' element={<Home />} />
            <Route path='chat_new' element={<ChatNew />} />
            <Route path='chat' element={<Chat />} />
            <Route path='settings' element={<Settings />} />
            <Route path='group' element={<Group />} />
          </Route>
        </Routes>
        {/* <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path='dashboard' element={<Home />} />
            <Route path='chat_new' element={<ChatNew />} />
            <Route path='settings' element={<Settings />} />
            <Route path='chat' element={<Chat />} />
            <Route path='group' element={<Group />} />

            <Route path='feedback' element={<Feedback />} />
            <Route path='chatdetail' element={<ChatDetail />} />
          </Route>
        </Routes> */}
      </Suspense>
    </HashRouter>
  )
}

export default App
