module.exports = {
  // 화살표 함수 매개변수 괄호 설정 ('avoid': 매개변수가 하나일 때 괄호 생략)
  arrowParens: 'avoid',
  // 객체 리터럴의 중괄호 주위에 공백 추가
  bracketSpacing: true,
  // 개행문자 설정 ('auto': 기존 개행문자 유지)
  endOfLine: 'auto',
  // HTML 공백 감도 설정
  htmlWhitespaceSensitivity: 'css',
  // JSX 요소의 마지막 `>`를 다음 줄로 내릴지 여부
  jsxBracketSameLine: false,
  // JSX에서 작은따옴표 대신 큰따옴표 사용
  jsxSingleQuote: false,
  // 줄 길이 제한
  printWidth: 150,
  // 마크다운 텍스트의 줄바꿈 방식
  proseWrap: 'preserve',
  // 객체 속성에 따옴표 사용 규칙
  quoteProps: 'as-needed',
  // 문장 끝 세미콜론 사용
  semi: true,
  // 작은따옴표 사용
  singleQuote: true,
  // 탭 너비 설정
  tabWidth: 2,
  // 객체, 배열 등에서 항상 마지막 쉼표 사용
  trailingComma: 'all',
  // 탭 대신 스페이스 사용
  useTabs: false,
  // Vue 파일의 script와 style 태그 들여쓰기
  vueIndentScriptAndStyle: true,
  // 포맷팅 시작 위치
  rangeStart: 0,
  // 파일 상단의 특별한 주석(@prettier) 필요 여부
  requirePragma: false,
  // 파일 상단에 @prettier 주석 자동 삽입 여부
  insertPragma: false,

  // import 구문 정렬 순서 설정
  importOrder: [
    '^react$',
    '^react-native$',
    '^@react-navigation/(.*)$',
    '^@/domains/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/PDS',
    '^@/assets/svgs',
    '^@/assets/images',
    '^@/',
    '^./',
  ],
  // import 그룹 간 빈 줄 추가
  importOrderSeparation: true,
  // import 구문 내 요소 정렬
  importOrderSortSpecifiers: true,
  // import 구문 정렬 시 대소문자 구분
  importOrderCaseInsensitive: true,

  // 특정 파일 타입에 대한 개별 설정
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],

  // 사용할 Prettier 플러그인
  plugins: [
    // import 구문 자동 정렬을 위한 Trivago 플러그인
    '@trivago/prettier-plugin-sort-imports',
  ],
};
