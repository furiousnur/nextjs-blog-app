import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
async function getData() {
    let response = await fetch('https://basic-blog.teamrabbil.com/api/post-list/2');
    let data = await response.json();
    return data;
}
const Page = async () => {
    let data = await getData();
    return (
        <div>
            <h2 className="text-center">Blog Posts</h2>
            <hr/>
            <br/>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    <img src={item['img']} className="card-img-top" alt="Blog Post" />
                                    <div className="card-body">
                                        <h4 className="card-title">{item['title']}</h4>
                                        <p className="card-text">{item['short']}</p>
                                        <Link href={`/blog/${item['id']}`} className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Page;