import styled from '@emotion/native';
import Header from '../../../components/header/Header';
import React, {ReactNode} from 'react';
import MainTitle from '../../../components/molecules/termsOfService/text/MainTitle';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import Paragraph from '../../../components/molecules/termsOfService/text/Paragraph';
import TableHeader from '../../../components/molecules/termsOfService/table/TableHeader';
import TableBody from '../../../components/molecules/termsOfService/table/TableBody';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export type PrivacyPoliciesItem = {
  header?: string;
  subHeader?: string;
  paragraph?: string;
  table?: ReactNode;
};

const PrivacyPoliciesScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation=useNavigation();
  const handleGoBack=()=>{
    navigation.goBack();
  }
  const privacyPoliciesItems: PrivacyPoliciesItem[] = [
    {
      paragraph: `단체 UOSLIFE(이하 “단체”)는 개인정보보호법, 전자서명법, 정보통신망법, 정보통신망 이용촉진 및 정보보호 등에 관한 법령에 따라 이용자의 개인정보를 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침에 따라 개인정보를 처리하고 있습니다. 단체가 개인정보 처리방침을 개정하는 경우에는 홈페이지 또는 시대생앱에 게시하거나 개별적으로 공지할 것입니다.`,
    },
    {
      header: `제1조 (처리 목적과 항목)`,
      paragraph: `(1) 단체는 서비스 이용에 반드시 필요한 개인정보를 다음과 같은 목적을 위하여 처리합니다. 처리하는 개인정보는 다음의 목적 이외의 용도로는 처리되지 않으며, 처리 목적과 항목이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 것입니다.

(2) 단체는 시대생 서비스 (이하 “서비스”) 이용에 필요한 최소한의 개인정보만을 수집하고 있습니다.
      
(3) 처음으로 이용하는 서비스의 경우 단체는 이용자에게 필수적인 정보의 입력을 요청할 수 있으며, 단체가 이미 보유한 정보가 있다면 입력을 생략하거나 이용자를 위하여 입력편의성을 제공할 수 있습니다.
      
(4) 단체는 대부분의 서비스에 대하여 ‘취소’ 또는 ‘철회’ 기능을 제공함으로써 이미 동의한 개인정보의 수집과 이용에 대하여 언제든지 취소하고 삭제할 수 있는 방법을 제공하고 있습니다. 다만, 일부 필수적 서비스에 대해서는 취소 기능이 제공되지 않을 수도 있습니다. 만약, 특정 서비스의 개인정보 수집 및 이용 동의를 철회하는 경우에는 해당 서비스의 이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다.
      
(5) 단체는 제공하는 핵심 서비스와 직접 관련된 경우만을 선별하여 신규 가입 시에 필수적인 동의로 처리하고 있습니다. 하지만, 가입과 동시에 개인정보가 곧바로 처리되는 것이 아니라, 정보주체가 특정 메뉴를 선택하고 추가적인 정보를 입력한 후에 비로소 개인정보의 처리가 시작됨을 알려드립니다.`,
    },
    {
      table: (
        <View>
          <TableRow>
            <TableHeader title="처리 목적" />
            <TableHeader leftOpen title="처리 목적" />
          </TableRow>
          <TableRow>
            <TableBody
              topOpen
              subTitle="1. 공통"
              bodyText="· 본인확인
· 민원처리, 분쟁해결, 법령상 의무이행을 위한 의사소통 경로 확보
· 서비스 관련 공지사항 전달, 고객만족도 조사
· 서비스 이용현황 통계분석 및 활용
· 인구통계학적 특성에 따른 서비스 제공, 맞춤형 UI 제공 등 서비스품질 개선, 신규서비스 개발을 위한 연구분석, 맞춤서비스 제공
· 서비스 제공 대상자 선정
· 신규서비스 이용 시 또는 본인인증 시, 보유정보를 이용한 입력편의성 제공"
            />
            <TableBody
              leftandTopOpen
              bodyText="이름, 전화번호

*서비스 이용 중 생성된 다양한 자동생성정보, 행태정보 등이 이용될 수 있습니다. 위치정보는 별도의 동의 절차에 따라 처리됩니다."
            />
          </TableRow>
          <TableRow>
            <TableBody topOpen subTitle="2. 학적" />
            <TableBody
              leftandTopOpen
              bodyText="사용자의 학번, 학과, 단과대, 학년, 재학 여부, 서울시립대학교 포털계정 ID/비밀번호 (이하 “포털 계정”)

*ID/비밀번호는 법에서 정해진 안전한 방식으로 암호화하여 저장합니다."
            />
          </TableRow>
          <TableRow>
            <TableBody
              topOpen
              subTitle="3. 소셜"
              bodyText="· 시대팅: 소개팅 또는 미팅 주선 서비스를 제공합니다."
            />
            <TableBody
              leftandTopOpen
              bodyText="시대팅: 회원식별값, 이름, 성별, 나이, 키, 학과"
            />
          </TableRow>
          <TableRow>
            <TableBody
              topOpen
              subTitle="4. 학교 생활"
              bodyText={`· 시대생 학생증: 서울시립대학교 모바일 ID를 시대생앱에서 제공합니다.

· 공지사항: 서울시립대학교 홈페이지의 공지사항을 제공합니다.

· 학식 정보 및 리뷰: 서울시립대학교의 학식 정보와 리뷰를 남길 수 있는 기능을 제공합니다.

· 도서관: 서울시립대학교의 도서관 좌석 관리 기능을 시대생앱에서 제공합니다.

· 전자 수령증: 시대생 단체이용자의 경품 수령 여부 인증 기능을 제공합니다.

· 서류 발급: 서울시립대학교 증명서 발급 기능을 시대생 앱에서 제공합니다.`}
            />
            <TableBody
              leftandTopOpen
              bodyText="시대생 학생증: 회원식별값, 학번, 학과, 학년, 포털 계정, 디바이스 ID, 디바이스 비밀번호

공지사항: 회원식별값, 학번, 학과, 학년

학식 정보 및 리뷰: 회원식별값, 닉네임

도서관: 회원식별값, 학번

전자 수령증: 이름, 학번, 학과, 학년, 재학 여부

서류 발급: 회원식별값, 학번, 포털 계정"
            />
          </TableRow>
        </View>
      ),
    },
    {
      paragraph: `· 신규가입 시에 동의해 주신 내용에 포함된 것이지만, 회원님께 더 편리한 사용환경을 제공해 드리기 위하여 입력편의성 제고에도 위 정보들이 활용될 수 있음을 알려 드립니다.
· 관계 법령에 따라 정보 및 기능성 메시지(개인정보 처리 정기적 안내, 광고·마케팅 수신 동의 고지 등)를 보낼 수 있습니다. 이때 연락처를 통해 전송이 되며, 광고성 정보에 대한 것은 선택적으로 동의한 고객에게만 전송됩니다.`,
    },
    {
      subHeader: `[안내] 개인정보의 수집방법`,
      paragraph: `· 시대생 앱 내에서 고객이 직접 입력한 정보
· 시대생 앱 내 조회서비스를 통해 고객이 조회한 정보
· 특정 서비스의 사용을 위해서 제휴사가 고객의 사전동의를 받은 후 시대생팀에 제공한 정보
· 상담과 민원처리 과정에서 생성된 정보
· 서비스 이용과정에서 자동으로 수집되는 정보`,
    },
    {
      subHeader: `[안내] 자동 생성/수집 정보`,
      paragraph: `서비스 이용과정이나 개인신용정보 처리과정에서 다음과 같은 정보들이 생성/수집되고 다음의 목적으로 이용될 수 있습니다.
· 서비스 이용내역(앱 사용 이력, 구매 및 검색 이력, 고객의 관심, 흥미, 기호 성향 등), 불량이용기록, 접속로그: 서비스 제공 관련 고객상담, 민원처리, 맞춤형 UI 제공, 맞춤형 서비스 제공, 맞춤형 리포트 등의 목적
· 휴대폰 모델명, 휴대폰 고유ID, OS버전, 통신사, 푸쉬토큰: 통계 및 서비스 품질 향상을 위한 목적
· 접속 IP주소: 부정 사용자에 대한 수사협조 목적과 위치기반서비스 제공
· 쿠키: 웹뷰에서의 인증연동 목적
· 광고식별자: 마케팅 프로모션 시 사용자 구분과 사용자 기기 구분 목적
· 위치정보: 위치기반서비스 이용약관에 명시된 목적과 부정이용 방지 목적
    
※ 이용자는 위치기반서비스 이용약관을 철회하거나 단말기의 설정을 변경하여 위치정보의 수집을 차단할 수 있습니다.`,
    },
    {
      subHeader: `[참고] 쿠키(cookie) 차단에 대한 안내`,
      paragraph: `쿠키는 이용자가 웹사이트를 접속할 때에 해당 웹사이트에서 이용자의 웹브라우저를 통해 이용자의 PC에 저장하는 매우 작은 크기의 텍스트 파일입니다. 이후 이용자가 다시 웹사이트를 방문할 경우, 웹사이트 서버는 이용자 PC에 저장된 쿠키의 내용을 읽어 이용자가 설정한 서비스 이용 환경을 유지하여 편리한 인터넷 서비스 이용을 가능케 합니다. 또한 방문한 서비스 정보, 서비스 접속 시간 및 빈도, 서비스 이용 과정에서 생성된 또는 제공(입력)한 정보 등을 분석하여 이용자의 취향과 관심에 특화된 서비스(광고 포함)를 제공할 수 있습니다. 이용자는 쿠키에 대한 선택권을 가지고 있으며, 웹브라우저에서 옵션을 설정하여 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.`,
    },
    {
      subHeader: `[안내] 비밀번호 등의 안전한 저장에 대하여`,
      paragraph: `다양한 조회서비스의 경우에 공동인증서의 비밀번호 또는 웹사이트 접속용 ID/비밀번호가 이용자의 요청에 따라 저장될 수 있습니다. 비밀번호를 저장하는 경우에 회사는 이를 강력한 알고리즘을 이용하여 암호화함으로써 이용자의 비밀번호를 안전하게 보호하고 있습니다. 또한, 이의 안전성을 지속적으로 점검하여 확인하고 있습니다.`,
    },
    {
      header: `제2조 (개인정보의 보유기간)`,
      paragraph: `단체는 회원이 탈퇴를 요청하거나 개인정보 수집 및 이용에 대한 동의를 철회하는 경우, 수집 및 이용 목적이 달성되거나 보유기간이 종료한 경우에는 해당 개인 신용정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래에 명시한 기간동안 보유할 수 있습니다. (제1조에 보유기간이 명시되어 있는 경우에는 그것이 우선합니다.)

(1) 회원 가입 및 관리 목적으로 수집된 개인정보는 고객의 회원 가입일로부터 회원 탈퇴일까지 보유 및 이용됩니다.
    
※ 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 보유 및 이용됩니다.
    
· 관계 법령 위반에 따른 수사/조사 등이 진행 중인 경우에는 해당 수사/조사 종료 시까지
    
(2) 광고/마케팅 수신동의 여부는 동의 철회 또는 회원 탈퇴 시까지 보유 및 이용됩니다.
    
※ 다만, 고객이 스마트폰에서 시대생 앱을 삭제하더라도 회원 탈퇴 요청을 하지 않을 경우, 개인정보가 삭제되지 않고 남아있을 수 있습니다. 개인정보의 삭제를 원하시면 반드시 회원 탈퇴를 요청하시기 바랍니다.`,
    },
    {
      header: `제3조 (위탁)`,
      paragraph: `(1) 단체는 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.`,
    },
    {
      table: (
        <View>
          <TableRow>
            <TableHeader title="수탁업체" />
            <TableHeader leftOpen title="위탁업무 내용" />
            <TableHeader leftOpen title="개인정보의 보유 및 이용 기간" />
          </TableRow>
          <TableRow>
            <TableBody topOpen bodyText="삼정데이타서비스(주)" />
            <TableBody leftandTopOpen bodyText="문자 전송 서비스 제공" />
            <TableBody
              leftandTopOpen
              bodyText="개인정보의 이용 목적 달성 시 또는 위탁 계약 종료 시"
            />
          </TableRow>
          <TableRow>
            <TableBody topOpen bodyText="Amazon Web Services Inc" />
            <TableBody
              leftandTopOpen
              bodyText="서비스의 제공 및 분석을 위한 인프라 관리"
            />
            <TableBody
              leftandTopOpen
              bodyText="개인정보의 이용 목적 달성 시 또는 위탁 계약 종료 시"
            />
          </TableRow>
        </View>
      ),
    },
    {
      paragraph: `(2) 단체는 위탁계약 체결 시 위탁업무 수행목적 외 개인신용정보 처리금지, 기술적ㆍ관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리ㆍ감독, 책임에 관한 사항을 계약서 등을 계약에 명시하고, 수탁자가 개인신용정보를 안전하게 처리하는지를 정기적으로 감독하고 있습니다.

(3) 위탁업무의 내용이나 수탁자가 변경될 경우에는 <개인정보 처리방침>을 통하여 공개하고 있습니다.`,
    },
    {
      header: `제4조 (제3자 제공)`,
      paragraph: `단체는 시대생 서비스 (이하 “서비스”) 이용에 반드시 필요한 개인정보를 다음과 같은 목적을 위하여 처리합니다. 처리하는 개인정보는 다음의 목적 이외의 용도로는 처리되지 않으며, 처리 목적과 항목이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 것입니다.

단체는 서비스 이용에 필요한 최소한의 개인정보만을 수집하고 있으며, 제휴사에 제공하고 있습니다.
    
처음으로 이용하는 서비스의 경우 단체는 이용자에게 필수적인 정보의 입력을 요청할 수 있으며, 단체가 이미 보유한 정보가 있다면 입력을 생략하거나 이용자를 위하여 입력편의성을 제공할 수 있습니다.
    
단체는 대부분의 서비스에 대하여 ‘취소’ 또는 ‘철회’ 기능을 제공하여 이미 동의한 개인정보의 수집과 이용에 대하여 언제든지 취소하고 삭제할 수 있는 방법을 안내하고 있습니다. 다만, 일부 필수적 서비스에 대해서는 취소 기능이 제공되지 않을 수도 있습니다. 만약, 특정 서비스의 개인정보 수집 및 이용 동의를 철회하는 경우에는 해당 제휴서비스의 이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다.
    
단체에서 제공하는 핵심 서비스와 직접 관련된 경우만을 선별하여 신규 가입 시에 필수적인 동의로 처리하고 있습니다. 하지만, 가입과 동시에 개인정보가 곧바로 처리되는 것이 아니라, 정보주체가 특정 메뉴를 선택하고 추가적인 정보를 입력한 후에 비로소 개인정보의 처리가 시작됩니다.`,
    },
    {
      table: (
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View>
              <TableRow>
                <TableHeader title="개인정보를 제공받는 자" />
                <TableHeader leftOpen title="제공 목적" />
                <TableHeader leftOpen title="제공 항목" />
                <TableHeader leftOpen title="보유 및 이용 기간" />
              </TableRow>
              <TableRow>
                <TableBody topOpen bodyText="친구 관계의 사용자" />
                <TableBody
                  leftandTopOpen
                  bodyText="- 친구 여부 제공
- 도서관 좌석 예약 자동 채우기
- 시간표 정보 제공"
                />
                <TableBody leftandTopOpen bodyText="이름, 학번, 학과, 학년" />
                <TableBody
                  leftandTopOpen
                  bodyText="서비스 회원 탈퇴 또는 친구 관계 파기 시까지
                  (또는 관련 법령에 따른 보존 기간)"
                />
              </TableRow>
            </View>
          </ScrollView>
        </View>
      ),
    },

    {
      header: `제5조 (개인정보의 국외 이전)`,
      table: (
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View>
              <TableRow>
                <TableHeader title="수탁업체" />
                <TableHeader leftOpen title="국가" />
                <TableHeader leftOpen title="이전 일시 및 방법" />
                <TableHeader leftOpen title="이전되는 개인정보 항목" />
                <TableHeader leftOpen title="위탁 업무 내용" />
                <TableHeader leftOpen title="개인정보의 보유 및 이용 기간" />
              </TableRow>
              <TableRow>
                <TableBody topOpen bodyText="Amazon Web Services Inc." />
                <TableBody leftandTopOpen bodyText="미국" />
                <TableBody
                  leftandTopOpen
                  bodyText="서비스 이용 시점에 네트워크 통한 전송"
                />
                <TableBody
                  leftandTopOpen
                  bodyText="서비스 이용 중 수집되는 개인정보 및 로그"
                />
                <TableBody
                  leftandTopOpen
                  bodyText="개인정보 처리를 위한 인프라 관리"
                />
                <TableBody
                  leftandTopOpen
                  bodyText="개인정보의 이용 목적 달성 또는 위탁계약 종료 시"
                />
              </TableRow>
            </View>
          </ScrollView>
        </View>
      ),
    },
    {
      header: `제6조 (정보주체와 법정대리인의 권리ㆍ의무 및 행사방법)`,
      paragraph: `(1) 정보주체는 단체에 대해 언제든지 다음 각 호의 개인신용정보 보호 관련 권리를 행사할 수 있습니다.

· 개인정보 열람 요구 및 통지 청구
· 오류 등이 있을 경우 정정 요구
· 삭제 요구 및 동의 철회 요구
· 처리정지 요구

(2) 제1항에 따른 권리 행사는 회사에 대해 서면, 전자우편 등을 통하여 하실 수 있습니다. 고객지원 전자우편(support@uoslife.team)로 연락하여 주십시오.
    
(3) 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 단체는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
    
(4) 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 "개인정보 처리 방법에 관한 고시(제2020-7호)" 별지 제11호 서식에 따른 위임장을 제출해야 합니다.
    
(5) 정보주체는 관계법령을 위반하여 단체가 처리하고 있는 타인의 개인정보 및 사생활을 침해할 수 없습니다.
    
(6) 단체는 정보주체 이외로부터 수집한 개인신용정보를 처리하는 때에는 정당한 사유가 없는 한 정보주체의 요구가 있은 날로부터 3일 이내에 수집 출처, 처리 목적, 개인정보 처리의 정지를 요구할 권리가 있다는 사실을 정보주체에게 알려 드립니다.
    
(7) 단체는 개인정보 보호법 제20조 제4항 각 호에 근거하여 제1항에 따른 정보주체의 요구를 거부하는 경우에는 정당한 사유가 없는 한 정보주체의 요구가 있은 날로부터 3일 이내에 그 거부의 근거와 사유를 정보주체에게 알려 드립니다.
    
(8) 회사는 '8세 이하의 아동', '피성년후견인', '장애인복지법에 따른 장애인에 해당하는 사람'에 대해 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우 본인의 동의가 있어야합니다. 이에 따라 보호의무자는 서면 동의를 통하여 위 해당하는 사람에 대한 개인위치정보 이용 또는 제공에 동의하는 경우 위치 서비스 약관 상의 이용자의 권리를 모두 가집니다.`,
    },
    {
      header: `제7조 (개인정보의 파기)`,
      paragraph: `(1) 단체는 개인정보 보유기간이 경과된 경우에는 다음의 사유가 없는 한 보유기간의 종료일로부터 지체없이(5일 이내), 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 개인정보가 불필요하게 되었을 때에는 개인정보를 파기합니다. 또한, 해당 개인정보를 별도의 데이터베이스로 옮기거나 보관장소를 달리하여 보존하고 있습니다.

단, 개인신용정보 처리 기록은 처리 구분에 따라 분류하여 기록이 발생한 날로부터 3년간 보존합니다.`,
    },
    {
      subHeader: `법령에 따라 보존하여야 하는 경우`,
      table: (
        <View>
          <TableRow>
            <TableHeader title="보존근거" />
            <TableHeader leftOpen title="처리항목" />
          </TableRow>
          <TableRow>
            <TableBody topOpen bodyText="전자상거래법 제6조" />
            <TableBody
              leftandTopOpen
              bodyText="· 소비자 불만 또는 분쟁처리에 관한 기록: 3년
· 표시ㆍ 광고에 관한 기록: 6개월
· 계약 또는 청약철회, 대금결제, 재화 등의 공급기록: 5년"
            />
          </TableRow>
        </View>
      ),
    },
    {
      subHeader: `단체 내부 방침에 따라 보존하여야 하는 경우`,
      table: (
        <View>
          <TableRow>
            <TableHeader title="보존근거" />
            <TableHeader leftOpen title="처리항목" />
          </TableRow>
          <TableRow>
            <TableBody topOpen bodyText="서비스 부정사용 방지" />
            <TableBody
              leftandTopOpen
              bodyText="부정 이용 기록(부정가입, 규정 위반 기록, 비정상적인 서비스 이용 기록, 보이스피싱 조회/확인 등): 10년"
            />
          </TableRow>
        </View>
      ),
    },
    {
      paragraph: `(2) 개인정보 파기의 절차 및 방법은 다음과 같습니다.

· 파기절차: 단체는 파기 사유가 발생한 개인신용정보를 선정하고 아래 방법에 따라 개인신용정보를 파기합니다.
· 파기방법: 단체는 법령에 따라 전자적 파일 형태로 저장된 개인신용정보는 복구 또는 재생되지 아니하도록 파기하며, 종이 문서에 기록된 개인정보는 복구할 수 없도록 세절하는 방법으로 파기합니다.`,
    },
    {
      header: `제8조 (장기 미이용자에 관한 사항)`,
      paragraph: `단체는 개인정보보호법 제39조의6에 따라 장기 미이용자에 관한 정책을 다음과 같이 유지하고 있습니다.

· 장기 미이용자: 고객 대상 최근 1년 동안 서비스 이용 기록이 없는 회원
· 개인정보보호법 및 관계 법령에 따라 장기 미이용자의 개인정보는 별도의 DB에 안전하게 보관됩니다. 또한 본인 요청 시에는 계정을 재사용할 수 있습니다.`,
    },
    {
      header: `제9조(개인정보의 안전성 확보조치)`,
      paragraph: `(1) 단체는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

· 관리적 조치: 내부관리계획 수립 및 시행, 구성원 대상 정기적 개인정보 보호 교육 등
· 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치 등
· 물리적 조치: 전산실, 자료보관실 등의 접근통제 등
    
(2) 단체는 서울시립대학교 포털계정 ID/비밀번호 (이하 “포털계정”)와 관련하여 다음과 같은 조치를 취하고 있습니다.
    
· 이용자 포털계정의 ID/비밀번호는 법령에서 정한 안전한 방식으로 암호화 되어 저장 및 관리되고 있습니다.`,
    },
    {
      header: `제10조 (개인정보보호책임자)`,
      paragraph: `회사는 개인신용정보 처리에 관한 업무를 총괄해서 책임지고, 개인신용정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자 겸 신용정보관리ㆍ보호인을 지정하고 있습니다.`,
    },
    {
      table: (
        <View>
          <TableRow>
            <TableHeader />
            <TableHeader leftOpen title="개인정보보호책임자" />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="이름" />
            <TableBody leftandTopOpen bodyText="박진희" />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="직책" />
            <TableBody leftandTopOpen bodyText="대표" />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="이메일" />
            <TableBody leftandTopOpen bodyText="support@uoslife.team" />
          </TableRow>
        </View>
      ),
    },
    {
      table: (
        <View>
          <TableRow>
            <TableHeader />
            <TableHeader
              leftOpen
              title="개인정보 열람 청구 및 개인정보 관련 고충처리 담당부서"
            />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="부서명" />
            <TableBody leftandTopOpen bodyText="운영팀" />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="담당자" />
            <TableBody leftandTopOpen bodyText="운영팀, 운영팀장" />
          </TableRow>
          <TableRow>
            <TableHeader topOpen title="연락처" />
            <TableBody leftandTopOpen bodyText="support@uoslife.team" />
          </TableRow>
        </View>
      ),
    },
    {
      header: `제11조 (권익침해 구제방법)`,
      paragraph: `정보주체는 아래의 기관을 통해 개인신용정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.

아래의 기관은 단체와는 별개의 기관으로서, 단체의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
    
· 개인정보침해 신고센터: (국번없이) 118 (privacy.kisa.or.kr)
· 개인정보 분쟁조정위원회: 1833-6972 (www.kopico.go.kr)
· 대검찰청 사이버수사과: (국번없이) 1301 (www.spo.go.kr)
· 경찰청 사이버안전국: 경찰민원콜센터 (국번없이) 182 (ecrm.cyber.go.kr)`,
    },
    {
      subHeader: `<부칙> 본 개인정보 처리방침은 2023년 09월 07일부터 적용됩니다.`,
    },
  ];
  return (
    <S.screenContainer style={{paddingTop: insets.top}}>
      <Header label={'개인정보 처리방침'} onPressBackButton={handleGoBack} />
      <ScrollView>
        <S.contentsWrapper>
          <MainTitle mainTitle="개인정보처리방침 (2.1)" />
          <View style={{gap: 40}}>
            {privacyPoliciesItems.map((item, index) => (
              <View key={index}>
                {(item.header || item.subHeader || item.paragraph) && (
                  <Paragraph
                    header={item.header}
                    subHeader={item.subHeader}
                    paragraph={item.paragraph}
                  />
                )}
                {item.table && item.table}
              </View>
            ))}
          </View>
        </S.contentsWrapper>
      </ScrollView>
    </S.screenContainer>
  );
};

const S = {
  screenContainer: styled.View`
    background-color: #ffffff;
  `,
  contentsWrapper: styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 16px 0px 16px;
    margin-bottom: 61px;
  `,
  tableWrapper: styled.Text`
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  `,
};

const TableRow = styled.View`
  flex-direction: row;
`;

export default PrivacyPoliciesScreen;