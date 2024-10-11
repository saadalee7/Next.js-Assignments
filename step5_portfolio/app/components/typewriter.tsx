"use client"
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <div className="font-mono text-2xl sm:text-3xl font-bold flex items-center justify-center mt-6 sm:mt-10 text-center px-4">
      <TypeAnimation
        sequence={[
          'Welcome to My Portfolio.',
          1000,
          'I Am Saad A.',
          1000,
          'I Am a Frontend Developer.',
          1000,
          'I Am a Backend Developer.',
          1000,
          'I Am a Web Designer.',
          1000,
          'I Am a Software Developer.',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1.5em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default ExampleComponent;
