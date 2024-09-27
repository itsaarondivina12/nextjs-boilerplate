// app/test/page.js

import TestLayout from '../TestLayout/layout'; // Ensure the path is correct
import Image from 'next/image'; // Import Image component from Next.js

export default function Test() {
    return (
        <TestLayout> {/* Wrap your content with the layout */}
            <div className="container" style={{ maxWidth: '100%' }}>
                <div className="row justify-content-center align-items-center main-container">
                    <div className="col-md-12 title-container mt-5" style={{ textAlign: 'center' }}>
                        <h1 className='font-[family-name:var(--font-geist-mono)]'>
                            Hello!
                        </h1>
                        <p className='font-[family-name:var(--font-geist-mono)]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                            Cras sollicitudin, nunc non fermentum fermentum, lectus ligula cursus ligula, eu consequat nisl
                            magna a arcu. Nullam et tortor tincidunt, vestibulum elit nec, malesuada elit. Pellentesque
                            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <Image
                            src="/undraw_In_love_6sq2.png" // Use a relative path or import statement
                            alt="Thank You Image"
                            className="img-fluid mx-auto"
                            style={{ maxWidth: '74%' }} // Inline styles as an object
                            width={400} // Specify width
                            height={200} // Specify height
                        />
                    </div>
                </div>
            </div>
        </TestLayout>
    );
}
