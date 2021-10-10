console.log('Hello Parcel!')

// 비동기 함수 선언
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise) 
}
test()  
// babel은 async 문법은  기본 설정으로 제공 x
// 별도의 패키지 필요함