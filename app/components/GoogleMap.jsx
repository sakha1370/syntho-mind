const GoogleMap = () => {
    return (
        <>
            <iframe className='w-full h-full rounded-xl'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d430.6313740327344!2d57.0295320217046!3d30.29260993133807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1692939981038!5m2!1sen!2s&language=en"
                 style={{border: "0"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
}

export default GoogleMap;