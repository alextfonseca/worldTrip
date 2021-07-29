import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";
import { Box, Image, Link, Text } from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function App() {
  return (
    <Box mb="50">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="swiper"
      >
        <SwiperSlide>
          <Image src="/images/continentEurope.png" />
          <Box position="absolute">
            <Link href="#">
              <Text fontSize="48px" fontWeight="bold" color="whiteAlpha.100">
                Europa
              </Text>
              <Text fontSize="24px" fontWeight="bold" color="whiteAlpha.200">
                O pais mais antigo
              </Text>
            </Link>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/continentEurope.png" />
          <Box position="absolute">
            <Link href="#">
              <Text fontSize="48px" fontWeight="bold" color="whiteAlpha.100">
                Europa
              </Text>
              <Text fontSize="24px" fontWeight="bold" color="whiteAlpha.200">
                O pais mais antigo
              </Text>
            </Link>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/continentEurope.png" />
          <Box position="absolute">
            <Link href="#">
              <Text fontSize="48px" fontWeight="bold" color="whiteAlpha.100">
                Europa
              </Text>
              <Text fontSize="24px" fontWeight="bold" color="whiteAlpha.200">
                O pais mais antigo
              </Text>
            </Link>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/continentEurope.png" />
          <Box position="absolute">
            <Link href="#">
              <Text fontSize="48px" fontWeight="bold" color="whiteAlpha.100">
                Europa
              </Text>
              <Text fontSize="24px" fontWeight="bold" color="whiteAlpha.200">
                O pais mais antigo
              </Text>
            </Link>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/continentEurope.png" />
          <Box position="absolute">
            <Link href="#">
              <Text fontSize="48px" fontWeight="bold" color="whiteAlpha.100">
                Europa
              </Text>
              <Text fontSize="24px" fontWeight="bold" color="whiteAlpha.200">
                O pais mais antigo
              </Text>
            </Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
