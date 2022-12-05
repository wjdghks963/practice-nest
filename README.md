# Modules

모듈은 @Module() 데코레이터로 주석이 달린 클래스 (@Module 데코레이터를 가진 클래스가 모듈)

@Module() 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 **메타데이터를 제공**

모듈은 Nest에서 애플리케이션 구조를 범위로 구성하는 데 사용된다.
컨트롤러와 공급자는 선언된 모듈에 따라 범위가 지정된다.
모듈과 해당 클래스(컨트롤러 및 공급자)는 Nest가 DI(종속성 주입)를 수행하는 방법을 결정하는 그래프를 형성한다.

https://docs.nestjs.com/modules#modules

# 비지니스 로직

nest.js는 설치하자마자 자신이 제시하는 폴더 구조(프로젝트 설계도) 알려준다. (미리 서비스, 컨트롤러, 모듈 파일이 깔려있고 어떤 역할을 하는지 알려주는 시범 파일)

nest.js는 비지니스 로직과 컨트롤러를 분리하고 싶어진다.

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

### App module

모든 것의 root 모듈

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
