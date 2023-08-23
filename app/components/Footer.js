import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Latest Posts</h3>
                        <ul>
                            <li><a href="#">Post 1</a></li>
                            <li><a href="#">Post 2</a></li>
                            <li><a href="#">Post 3</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Social Media</h3>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
