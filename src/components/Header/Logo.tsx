import Image from 'next/image'

function Logo() {
    return (
      <div>
       <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:white"
          src="/IJ.svg"
          alt="Ismael Logo"
          width={30}
          height={30}
          priority
        />
      </div>
    );
  }
  
  export default Logo;
  