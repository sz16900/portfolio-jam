import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
  <Layout>
    <section className="contact-page">
      <article className="contact-form">
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <div className="form-group">
            <h3>get in touch</h3>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" placeholder="name" className="form-control"/>
            <input type="email" placeholder="email" className="form-control"/>
            <textarea name="message" rows="3" className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
      </article>
    </section>
  </Layout>
  )
}

export default contact
