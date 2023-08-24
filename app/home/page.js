import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCart from "@/app/components/BlogCart";

const Page = () => {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Welcome to My Blog</h2>
                    <p className="text-center">
                        Explore the latest articles and updates on a wide range of topics.
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container"> 
                    <BlogCart />
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Join Our Newsletter</h2>
                    <p className="text-center">
                        Stay updated with our latest articles and news by subscribing to our newsletter.
                    </p>
                    <div className="text-center">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-primary mt-3">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page;