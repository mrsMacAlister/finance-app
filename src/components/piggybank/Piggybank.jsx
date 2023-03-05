import "./piggybank.scss";
import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";

const Piggybank = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub1 = auth.onAuthStateChanged((authUser) => {
      unsub1();
      if (authUser) {
        const userID = authUser.uid;
        const fetchData = async () => {
          let list = [];
          try {
            const querySnapshot = await getDocs(
              collection(db, `${userID}savings`)
            );
            querySnapshot.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            console.log(list);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      } else {
        console.log("not logged in");
      }
    });
    unsub1();
  }, []);

  return (
    <div className="piggybank">
      <div className="title">SAVINGS</div>
      <div className="carousel">
        <Swiper
          className="swiper"
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={EffectCreative}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {" "}
          <div className="slide-container">
            
            {data.map((dt) => {
              return (
                <SwiperSlide className="swiper-slide">
                  <div className="savings-goal" key={dt.id}>
                    <div className="goal-amount">
                      <div className="amount">{dt.amount} €</div>
                    </div>
                    <div className="goal-details">
                      <div className="title">{dt.title}</div>
                      <div className="goal-deadline">by {dt.deadline}</div>
                      <div className="image">
                        <img
                          src={
                            dt.img
                              ? dt.img
                              : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
                          }
                          alt=""
                          className="image"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Piggybank;
