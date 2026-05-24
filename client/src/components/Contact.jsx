import { useState } from "react"
import toast from "react-hot-toast"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://portfolio-website-xqks.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      console.log(data)

      if (response.ok && data.success) {
        // alert("Message sent!")
        toast.success("Message sent successfully!")

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        // alert("Failed to send message")
        toast.error("Failed to send message")
      }

    } catch (error) {
      console.error(error)
      // alert("Something went wrong")
      toast.error("Something went wrong")
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-4xl font-bold mb-8">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-500 text-black py-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact