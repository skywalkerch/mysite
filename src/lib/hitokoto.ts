async function getHitokoto() {
  const res = await fetch("https://v1.hitokoto.cn/?encode=json");
  const data = await res.json();
  return data.hitokoto;
}

export default getHitokoto;
