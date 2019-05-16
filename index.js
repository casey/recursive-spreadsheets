async function render() {
  let response = await fetch('index.md');

  let text = await response.text();
  
  let slideshow = remark.create({
    source:     text,
    navigation: {scroll: false}
  });
} 

render()
