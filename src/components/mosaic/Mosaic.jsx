import "./mosaic.css"
import {Boxed, Imaged} from "../image/Image";

export default function Mosaic (){
    const images={
        i1:"assets/ba4.jpg",
        i2:"assets/nh2.jpeg",
        i3:"assets/ba13.jpg",
        i4:"assets/pq1.jpg",
        i5:"assets/pq2.jpg",
        i6:"assets/pq3.jpg",
        i7:"assets/pq4.jpg",
        i8:"assets/pq8.jpg",
        i9:"assets/r19.jpg",
        i10:"assets/n8.jpg",
        i11:"assets/places/r12.jpg",
        i12:"assets/places/r21.jpg",
        i13:"assets/places/r13.jpg",
        i14:"assets/places/r19.jpg",
        i15:"assets/places/r14.jpg",
        i16:"assets/places/r15.jpg",
        i17:"assets/places/r16.jpg",
        i18:"assets/places/r17.jpg",
        i19:"assets/places/r18.jpg",

    }
    return(
        <>
            <div className="galleryGalore">
                <div className="ex1">
                    <div className="ex1s1">
                        <Boxed wid="250px" height="150px" className="">
                            <Imaged custImg={images.i2} imgWidth="250px" imgHeight="150px" />
                        </Boxed>
                        <Boxed wid="150px" height="120px" className="">
                            <Imaged custImg={images.i3} imgWidth="150px" imgHeight="120px" />
                        </Boxed>
                    </div>
                    <div className="ex1s2">
                        <Boxed wid="200px" height="200px">
                            <Imaged custImg={images.i4} imgWidth="200px" imgHeight="200px" />
                        </Boxed>
                        <Boxed wid="200px" height="250px">
                            <Imaged custImg={images.i5} imgWidth="200px" imgHeight="250px" />
                        </Boxed>
                    </div>
                </div>

                <div className="ex2">
                    <Boxed wid="250px" height="400px">
                        <Imaged custImg={images.i6} imgWidth="250px" imgHeight="400px" />
                    </Boxed>
                </div>

                <div className="ex3">
                    <div className="ex3s1">
                        <Boxed wid="350px" height="200px">
                            <Imaged custImg={images.i7} imgWidth="350px" imgHeight="200px" />
                        </Boxed>
                    </div>
                    <div className="ex3s2">
                        <Boxed wid="150px" height="200px">
                            <Imaged custImg={images.i8} imgWidth="150px" imgHeight="200px" />
                        </Boxed>
                        <Boxed wid="200px" height="210px" style={{marginLeft:"8%" }}>
                            <Imaged custImg={images.i9} imgWidth="200px" imgHeight="210px" />
                        </Boxed>
                    </div>

                </div>


            </div>
            <div className="galleryGalore">
                <div className="ex1">
                    <div className="ex1s1">
                        <Boxed wid="250px" height="150px" className="">
                            <Imaged custImg={images.i2} imgWidth="250px" imgHeight="150px" />
                        </Boxed>
                        <Boxed wid="150px" height="120px" className="">
                            <Imaged custImg={images.i13} imgWidth="150px" imgHeight="120px" />
                        </Boxed>
                    </div>
                    <div className="ex1s2">
                        <Boxed wid="200px" height="200px">
                            <Imaged custImg={images.i4} imgWidth="200px" imgHeight="200px" />
                        </Boxed>
                        <Boxed wid="200px" height="250px">
                            <Imaged custImg={images.i8} imgWidth="200px" imgHeight="250px" />
                        </Boxed>
                    </div>
                </div>

                <div className="ex2">
                    <Boxed wid="250px" height="400px">
                        <Imaged custImg={images.i13} imgWidth="250px" imgHeight="400px" />
                    </Boxed>
                </div>

                <div className="ex3">
                    <div className="ex3s1">
                        <Boxed wid="350px" height="200px">
                            <Imaged custImg={images.i11} imgWidth="350px" imgHeight="200px" />
                        </Boxed>
                    </div>
                    <div className="ex3s2">
                        <Boxed wid="150px" height="200px">
                            <Imaged custImg={images.i2} imgWidth="150px" imgHeight="200px" />
                        </Boxed>
                        <Boxed wid="200px" height="210px" style={{marginLeft:"8%" }}>
                            <Imaged custImg={images.i1} imgWidth="200px" imgHeight="210px" />
                        </Boxed>
                    </div>

                </div>


            </div>
        </>
    )
}