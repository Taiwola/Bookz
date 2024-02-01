const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer_bookz">
                <h3>B<span className='footer_span'>oo</span>kzz</h3>
                <p>
                    A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes
                </p>
            </div>

            <div className="footer_address">
                <h2>Get in Touch Us</h2>
                <address>
                    <img src="/images/location.png" alt="location" />
                    <p>1 Ogunlesi Street, Onipanu, Lagos</p>
                </address>
                <p>
                    <span><img src="/images/call.png" alt="location" /></span>
                    +234 814 6745 450
                </p>

                <p>
                    <span><img src="/images/sms.png" alt="location" /></span>
                    support@bookers.com
                </p>
            </div>

            <div className="footer_map">
                <img src="/images/mapss.png" alt="map" />
            </div>
        </div>
    )
}

export default Footer;