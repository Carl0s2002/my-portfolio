import Image from "next/image";

export default function ProfilePic() {
    return (
        <Image 
            src="/Portrait.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full"
        />
    );
}