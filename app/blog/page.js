import 'bootstrap/dist/css/bootstrap.min.css'; 
import NewBlogs from "@/app/components/NewBlogs"; 

const Page = () => { 
    return (
        <section className="py-5">
            <div className="container">
                <NewBlogs />
            </div>
        </section>
    );
}
export default Page;