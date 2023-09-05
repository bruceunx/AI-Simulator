import {
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import UploadFile from './UploadFile'
import SelectDataset from './SelectDataset'

interface Props {
  isOpen: boolean
  isData: boolean
  onClose: () => void
}

const Analysis: React.FC<Props> = ({ isOpen, onClose, isData }) => {
  console.log(isData)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent py={3} bg='rootBg' color='textColor'>
        <ModalHeader>
          <Heading fontSize='md' textAlign='center'>
            提交数据
          </Heading>
        </ModalHeader>
        <ModalBody>{isData ? <UploadFile /> : <SelectDataset />}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Analysis