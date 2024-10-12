import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-300 transition transform hover:scale-105 duration-300">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <Image
            className="border border-gray-950 rounded-full"
            src="/logo.jpg"
            alt="Profile logo"
            width={200}
            height={200}
          />
          <div className="sm:ml-4 mt-4 sm:mt-0 text-center">
            <h5 className="text-xl font-medium text-gray-900">
              I&apos;m Muhammad Saad.
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Designer
            </span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
