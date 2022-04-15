import React from "react"

const contact = () => {
  return (
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="name"
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
            />
            <textarea
              name="message"
              placeholder="message"
              className="form-control"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            Submit
          </button>
        </form>
      </article>
    </section>
  )
}

export default contact
