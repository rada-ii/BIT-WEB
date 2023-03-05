export async function getPosts() {
  const res = await fetch('http://127.0.0.1:3000/');
  const data = await res.json();
  return data;
}
