import { useState } from 'react'

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)
  console.log(emails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => {
            console.log('Inside Map: ', email)

            return (
              <li className="read">
                <div className="select">
                  <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => {}}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
