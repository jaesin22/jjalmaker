# Banner Maker(클론)

나만의 배너 생성기 개발 프로젝트

https://jaesin22.github.io/jjalmaker/

# 목차

- [사용 기술](#사용-기술)
  - [프론트엔드](#프론트엔드)
  - [기타 주요 라이브러리](#기타-주요-라이브러리)
- [프로젝트 목적](#프로젝트-목적)
  - [배너 생성기 프로젝트를 만든 이유?](#배너-생성기-프로젝트를-만든-이유)
- [이슈 해결](#이슈-해결)
  - [Safari 브라우저에서 다운로드 기능이 작동되지 않는 이슈 해결](#Safari-브라우저에서-다운로드기능이-작동되지-않는-이슈-해결)
  - [canvas 화질 저하 문제 해결](#canvas-화질-저하-문제-해결)
  - [웹 폰트 최적화](#웹-폰트-최적화)
- [핵심 기능](#핵심-기능)

  - [반응형 웹](#반응형-웹)
  - [react-redux 적용](#react-redux-적용)
  - [TypeScript 적용](#TypeScript-적용)

- [프로젝트를 통해 느낀점](#프로젝트를-통해-느낀점)

## 사용 기술

### 프론트엔드

- Javascript
- TypeScript
- Html5
- TailwindCSS

### 기타 주요 라이브러리

- Github-pages

## 프로젝트 목적

### 배너 생성기 프로젝트를 만든 이유

몇달 전, 곽철용 짤 생성기 개발 과정에 대한 글을 읽었습니다. 그러나 저는 프론트엔드 개발에 대해 잘 알지 못했기에 그냥 웃으면서 넘겼습니다. 그러나 본격적으로 개발 공부를 하기 시작하던 어느 날, 문득 이 프로젝트 생각이 나서 직접 만들어보게 되었습니다.

단순히 정해져 있는 짤(사진)에만 국한된 것이 아닌 내가 직접 사진을 올려서 만들어 볼 수 있게끔 하면 더 좋을 것 같다는 생각이 들어 좀 더 찾아본 결과, 이미 godori라는 분이 만들어놓으신 Banner Maker 라는 게 있었습니다.

이걸 직접 비슷하게 만들어봐도 좋겠다 라는 생각이 들어 직접 최대한 비슷하게 만들었습니다.

## 이슈 해결

### Safari 브라우저에서 다운로드 기능이 작동되지 않는 이슈 해결

자체적으로 동작이 원활하게 돌아가는 지 확인하기 위해, 개인 핸드폰으로 테스트 하던 중, 사파리 브라우저에서만 다운로드 기능이 작동하지 않는 이슈가 있었습니다. 해당 코드는 아래와 같습니다.

```TypeScript
const download = useCallback(() => {
    if (canvasRef?.current) {
      const url = canvasRef.current.toDataURL();
      const link = document.createElement("a");
      link.href = url;
      link.download = "image.png";
      link.click();
    }
  }, [canvasRef]);
```

구글링을 통해 문제를 확인해보니 Safari 브라우저에서는 `toDataURL`로 직접 이미지를 다운로드를 지원하지 않기 때문에 발생한 이슈였고, `html2canvas`와 `file-saver`를 적용하는 방법으로 문제를 해결했습니다. 코드는 아래와 같습니다.

```TypeScript
 const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        dispatch(setImage(imageDataUrl));
      };
    }
    if (typeof file === "object") {
      reader.readAsDataURL(file);
    }
  };
```

### canvas 화질 저하 문제 해결

반응형 웹을 적용하면서 글씨를 직접 적을 수 있는 canvas 영역 또한 크기에 따라 조정될 수 있도록 canvas에 width, height 값을 주지 않고, TailWind CSS로 직접 크기를 수정했을 때 문제가 발생했습니다.

해결방법은 생각보다 간단했습니다. canvas에 크기와 관계없이 자체적인 해상도가 있는데, 제가 해당값을 반응형 디자인을 적용하다 누락해서 생긴 문제였습니다. 아래와 같이 해상도는 컴퓨터 해상도로 맞춰주고, 화면에 그려지는 크기를 설정함으로 문제를 해결했습니다.

```TypeScript
<canvas
    ref={canvasRef}
    width={700}
    height={350}
    className="w-[350px] h-[200px] md:w-[550px] md:h-[275px] lg:w-[700px] lg:h-[350px]"
/>
```

### 웹 폰트 최적화

최초로 `github-pages` 배포를 완료하고 사이트에 처음 들어갔을 때, 페이지가 최초 로딩되기 까지 4초 가까운 시간이 걸렸습니다. 많은 것들을 보여주는 사이트도 아닌데 최초 로딩이 왜 이렇게 오래 걸릴까 생각해본 결과, 폰트를 로딩하는 데 많은 시간이 걸려서 생긴 문제라는 걸 chrome의 network 탭에서 확인했습니다.

위의 문제를 해결하기 위해

1. 웹 폰트 확장자를 순서에 맞게 적용
2. font-display 속성을 사용

함으로 문제를 해결했고, 현재 배포 되어있는 페이지에서는 최초 로딩까지 1.5초가 안 걸리는 시간에 로딩이 되고 있습니다.

## 핵심 기능

### 반응형 웹

TailWind CSS를 이용하여 작은 모바일 환경은 물론 태블릿 대형 화면에서도 문제없이 작동하는 반응형 웹을 구현하였습니다.

### react-redux 적용

최초에 개발을 했을 때는 App.js에 모든 상태를 몰아넣고 자식 컴포넌트 -> 부모 컴포넌트 -> 자식 컴포넌트의 방법으로 자식 컴포넌트에 상태를 주입했습니다. 그러나 보면 볼수록 이 방법보다 더 좋은 방법이 있을텐데.. 라는 생각이 들었고, react-redux를 통한 전역에서 상태관리를 할 수 있도록 수정했습니다. 밑의 코드는 수정 전의 App.js에서 상태를 관리하는 코드 중 일부입니다.

```TypeScript
  // App.tsx
  const [text, setText] = useState("Sample Text");
  const [color, setColor] = useState("#FFFFFF");
  const [selectedFontSize, setSelectedFontSize] = useState(60);
  const onFontWeight = 30;
  const onFontBorder = "transparent";
  const [onFontType, setonFontType] = useState("SANJUGotgam");
  const [bgcolor, setBgColor] = useState("#E9B1BE");
  const [imageDataUrl, setImageDataUrl] = useState("");
```

위의 코드처럼 App.js에서 모든 상태를 관리하는 문제점을 react-redux를 적용해서 전역적으로 상태를 관리할 수 있도록 했습니다.

### TypeScript 적용

이 토이 프로젝트를 거의 다 만들어가는 시점까지 타입스크립트를 적용할 생각은 못하고 있었습니다. 그러나 자주 보는 커리어리, 원티드 같은 곳에서 타입스크립트를 꼭 써야 하는 이유에 대해 설명해주는 글을 보면서, 배워가는 과정이니까 한 번 공부하면서 직접 수정해보자 ! 라는 생각이 들어 자바스크립트로 짜여져 있는 코드를 타입스크립트로 수정했습니다.
처음 써보는 타입스크립트라 시행착오도 참 많았습니다. 그러함에도 왜 써야 하는지를 깨닫게 된 좋은 시간이였습니다.

## 프로젝트를 통해 느낀점

1인 프로젝트로 진행하다보니 제가 짠 코드가 정말 괜찮은 코드인지, 더 좋은 구현방법은 없는지 정말 많은 고민을 하였습니다.

개발자로 살아온 시간은 길었지만 초보적인 개발만 했었고, 본격적으로 공부한 지 1개월도 채 안되어 타입스크립트, 리덕스 등 많은 것들이 처음이고 낯설게 느껴졌으며 프로젝트 기간동안 이걸 온전히 끝낼 수 있을까? 라는 생각도 많이 했습니다.

하지만 프로젝트를 진행하는 기간동안 정말 하루하루가 빠르게 지나갔고, 해결하기 어려운 문제를 맞닥뜨릴때 이를 해결하기위해 10시간동안 자리에 내리 앉아 골머리를 싸매며 코딩하거나,

타입스크립트를 적용하기 위해 타입스크립트 핸드북을 4시간 동안 보며 문제를 해결하려는 제 모습을 발견하면서

**나는 더 성장할 수 있다, 어떤 문제라도 해결할수 있다**는 자신감을 갖게 되었습니다.

또한 아직 부족한 것이 너무 많고, 공부를 하면 할수록 새로운 공부거리가 훨씬 많이 나오고 있지만 그 모든 공부 과정이 힘들고 고통스럽기 보다는 할만하다, 재밌다는 느낌을 오랜만에 받으며 개발 공부를 처음 시작했던 초심으로 돌아간 느낌을 받았습니다.

이번 프로젝트로 정말 많은것을 공부하고 배웠고, 지금에 정체되어 있지 않고, 개발자로서 더 성장하여 더 의미있는 결과를 만들어내는 한 걸음을 내딛게 되었다고 확신합니다.
