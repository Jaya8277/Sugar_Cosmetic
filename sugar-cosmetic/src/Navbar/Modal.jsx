import React from "react"
import {
    Modal,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import Signin from "./Signin"
import { BsFillPersonFill } from "react-icons/bs";




export default function SinginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
      {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
        Some other content that'll receive focus on close.
      </Box> */}

      <Button leftIcon={<BsFillPersonFill></BsFillPersonFill>} mt={4} onClick={onOpen}>
      {/* <BsFillPersonFill fontSize="20px" /> */}
      Login/Register
      </Button >
      
      <Modal  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay /> */}
        <ModalContent ml="40rem" h="50rem" mt="-2rem" position="absolute">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton top="5vh"  ml="1rem" position="relative" />
          {/* <ModalBody> */}
         <Signin/>
          {/* </ModalBody> */}

        
        </ModalContent>
      </Modal>
     </>
  )
}
