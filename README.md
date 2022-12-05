# Modules

모듈은 @Module() 데코레이터로 주석이 달린 클래스 (@Module 데코레이터를 가진 클래스가 모듈)

@Module() 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 **메타데이터를 제공**

모듈은 Nest에서 애플리케이션 구조를 범위로 구성하는 데 사용된다.
컨트롤러와 공급자는 선언된 모듈에 따라 범위가 지정된다.
모듈과 해당 클래스(컨트롤러 및 공급자)는 Nest가 DI(종속성 주입)를 수행하는 방법을 결정하는 그래프를 형성한다.

https://docs.nestjs.com/modules#modules

# 아키텍쳐

nest.js는 설치하자마자 자신이 제시하는 폴더 구조(프로젝트 설계도) 알려준다. (미리 서비스, 컨트롤러, 모듈 파일이 깔려있고 어떤 역할을 하는지 알려주는 시범 파일)

nest.js는 비지니스 로직과 컨트롤러를 분리하고 싶어한다.

### contorller

라우팅을 관리하고 그 안에 있는 함수들을 실행할 수 있게 해준다.
url을 가져오고 function을 반환한다.

@Controller()는 url의 Enrty Point를 컨트롤한다.

ex)

```javascript
@Controller('movies')
export class MoviesController {
  // /movies
  @Get()
  getAll() {
    return 'this will returjn all movies';
  }
  // /movies/2
  @Get('/:id')
  getOne() {
    return 'this will return a movie';
  }
}
```

### service

라우터에 대한 컨트롤러들을 저장, 관리한다.
비지니스 로직을 생행하는 역할

### module

App module : 모든 것의 root 모듈
service, controller를 하나의 모듈로 만든 후 app module에 연결시킨다.

# nest cli

nest는 cli를 이용해서 개발자가 필요한(개발할) 파일(service, controller...)을 생성할 수 있다.

# Param decorators

Nest는 HTTP 라우트 핸들러와 함께 사용할 수 있는 유용한 매개변수 데코레이터 세트를 제공한다.

```
// NestJS
@Param(param?: string)

// ExpressJS
req.params / req.params[param]
```

https://docs.nestjs.com/custom-decorators#param-decorators

# Validate CRUD data

내장 ValidationPipe사용을 위한 class-validator, class-transformer설치

`npm i --save class-validator class-transformer`

## Validation

웹 애플리케이션으로 전송되는 데이터의 검증을 도와준다.(미들웨어)
들어오는 요청을 자동으로 검증하기 위해 Nest는 즉시 사용할 수 있는 여러 파이프를 제공하고 있다.
ValidationPipe는 강력한 클래스 유효성 검사기 패키지와 선언적 유효성 검사 데코레이터를 사용한다.
ValidationPipe는 들어오는 모든 클라이언트 페이로드에 대해 유효성 검사 규칙을 적용하는 편리한 접근 방식을 제공한다.

https://docs.nestjs.com/techniques/validation

### 자동 검증

애플리케이션 수준에서 ValidationPipe를 바인딩하는 것으로 시작할 수 있다.
따라서 모든 엔드포인트가 잘못된 데이터를 수신하지 못하도록 보호됩니다.

https://docs.nestjs.com/techniques/validation

### whitelist

true로 설정하면 유효성 검사기는 class-validator의 유효성 검사 데코레이터를 적어도 하나라도 사용하지 않은 모든 속성 객체를 제거한다.

### forbidNonWhitelisted

true로 설정하면 화이트리스트에 없는 속성을 제거하는 대신 유효성 검사기가 예외(오류)를 throw한다.

### transform (자동 형변환)

네트워크를 통해 들어오는 payload는 일반 JavaScript 객체

ValidationPipe는 payload를 DTO 클래스에 따라 유형이 지정된 객체로 자동 변환할 수 있다.
자동 변환을 활성화하려면 transform을 true로 설정하면 된다.
만약 전역적으로 활성화하려면 전역 파이프에서 옵션을 설정한다.

```
app.useGlobalPipes(
new ValidationPipe({
transform: true,
}),
);
```

https://docs.nestjs.com/techniques/validation#transform-payload-objects

# Mapped types

`npm i @nestjs/mapped-types`

### Partial

input validation types(DTO라고도 함)을 빌드할 때 동일한 유형에 대한 create 및 update 변형을 빌드하는 것이 종종 유용하다.

예를 들어, create에는 모든 필드가 필요할 수 있지만 update는 모든 필드를 선택 사항으로 만들 수 있다.
Nest는 이 작업을 더 쉽게 만들고 상용구를 최소화하기 위해 PartialType() 유틸리티 함수를 제공하고 있다.
PartialType() 함수는 입력 유형의 모든 속성이 선택 사항으로 설정된 유형(클래스)을 반환한다.

https://docs.nestjs.com/openapi/mapped-types#partial
