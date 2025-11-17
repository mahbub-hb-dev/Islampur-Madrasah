import { JSX } from 'react';

const Location = (): JSX.Element => {
  return (
    <div className="lg:w-4/12 lg:mx-5">
        <p className="text-center font-[200] text-xl text-white border p-0.5 bg-green-600 mb-4"> LOCATION </p>
        <iframe
        className="rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0905007215306!2d90.47117617409886!3d23.708461990387523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70054decb79%3A0x5cd9f2b094411fd2!2sAhmad&#39;s%20Education!5e0!3m2!1sen!2sbd!4v1756011590698!5m2!1sen!2sbd"
        width="100%"
        height={360}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default Location
