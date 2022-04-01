import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services'
import { setTimeout } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localstorage, setLocalstorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if (storeDataEl) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          type="text"
          ref={commentEl}
          className="w-full rounded-lg bg-gray-200 p-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-200 py-2 px-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200 lg:grid-cols-2"
          placeholder="Name"
          name="name"
        />

        <input
          type="text"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-200 py-2 px-4 text-gray-800 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            htmlFor="storeData"
            className="ml-2 cursor-pointer text-gray-500"
          >
            Save my name and email for the next time I comment.
          </label>
        </div>
      </div>
      {console.log(error)}
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease  inline-block cursor-pointer rounded-full bg-purple-600 px-8 py-3 text-lg text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment Submitted for review.
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
