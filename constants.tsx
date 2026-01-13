
import React from 'react';
import { Smartphone, HardDrive, MessageSquare, ShieldCheck } from 'lucide-react';
import { ServiceInfo, ContactInfo } from './types';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'phone',
    title: '핸드폰 복구',
    description: '침수, 파손, 고장난 스마트폰 내 소중한 사진과 연락처를 안전하게 복구합니다.',
    icon: <Smartphone className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'harddisk',
    title: '하드디스크 복구',
    description: 'HDD, SSD, 외장하드, USB 등 각종 저장매체의 데이터 손실을 전문적으로 해결합니다.',
    icon: <HardDrive className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'kakaotalk',
    title: '카톡 포렌식',
    description: '삭제된 메시지, 대화방 복구 등 정밀한 디지털 포렌식 분석 서비스를 제공합니다.',
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'security',
    title: '보안 및 신뢰',
    description: '철저한 개인정보 보호 원칙을 준수하며 신속하고 정확한 결과를 약속드립니다.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'tdsdatarecovery@gmail.com',
  telegram: '@TDSPHONERECOVERY',
  homepage: 'https://www.tds119.com/'
};

export const DRIVE_LINK = 'https://drive.google.com/drive/folders/1L1NtzuWFQN3amHVNXrzW9jXaF_ACy9gW?usp=drive_link';
