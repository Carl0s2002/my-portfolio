import Image from "next/image";
import Layout from "./components/Layout";
export default function Home() {
  return (
    <Layout>
      <div>
        <Image 
          src="/Portrait.jpg"
          height={200}
          width={200}
          alt="Profile Picture"
          className="rounded-full"
        />
      </div>
    </Layout>
  );
}
