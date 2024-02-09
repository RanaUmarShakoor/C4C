import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import star_user from "./assets/star_user.png";
import cleaning_icon from "./assets/cleaning_icon.png";
import user from "./assets/user_icon.png";

export function Page() {
  return (
    <main className="w-screen h-screen flex flex-col bg-pink-400">
      <Navbar />
      <Container className="flex-1 flex items-center justify-center bg-purple-400">
        {/* <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 p-8 rounded-[8px] lg:bg-[#000000B2]">
          <Block
            photo={star_user}
            heading="Do you offer cleaning services?"
            subheading="Register as a cleaner"
            type="1"
          />
          <Block
            photo={cleaning_icon}
            heading="Looking for cleaning?"
            subheading="Register as a user"
            type="2"
          />
        </div> */}
        <Modal />
      </Container>
    </main>
  );
}

function Block({ photo, heading, subheading, type="1" }) {
    let background = " bg-orange-500"
    if(type==="2")
        background = " bg-blue-500"
   

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-0 px-4 lg:px-0 rounded-[8px] lg:text-white text-center bg-white lg:bg-transparent">
      <div className={"p-3 rounded-full" + background}>
        <img src={photo} alt="" className="h-10 w-10 object-contain" />
      </div>
      <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
        {heading}
      </h3>
      <div className="flex flex-col gap-6">
        <a href="">
          <h4 className="font-semibold text-base md:text-xl lg:text-2xl">
            {subheading}
          </h4>
        </a>
        <button className={" py-2 rounded-lg" + background}>
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-5 h-5 object-contain" />
            <p>Sign In</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function Modal(){
    let background = ""

    return(
        <div className="flex flex-col gap-6 p-6 rounded-[8px] bg-white">
            <h1 className=" font-semibold text-2xl text-blue-500 text-center">Sign In</h1>
            <div className="flex flex-col gap-1 w-[300px] md:w-[360px]">
                <label htmlFor="" className="font-medium">Email</label>
                <input type="email" placeholder="Mrkvička@gmail.com" className=" px-4 py-2  border-2 rounded-md border-blue-500" />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium">Password</label>
                <input type="password" placeholder="**********" className="px-4 py-2  border-2 rounded-md border-blue-500" />
            </div>
            <button className={" py-2 rounded-lg bg-blue-500" + background}>
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-5 h-5 object-contain" />
            <p>Sign In</p>
          </div>
        </button>
        <a href="" className=" font-medium text-blue-500 underline text-center">
            Forgot your password?
        </a>
        </div>
    )
}