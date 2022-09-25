export function animatedCounter (number) {
  let initialNumber = number - Math.ceil(number/4)

    const interval = setInterval(() => {
      if (initialNumber < number) {
        initialNumber++
      return initialNumber
      } else {
        clearInterval(interval);
      }

    }, 10)

}
