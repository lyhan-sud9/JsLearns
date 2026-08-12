/* =========================================================
   DATA: 9 stages, each with lessons (content) — the roadmap
   ========================================================= */
const stages = [
{
  id:'basics', label:'Nhập môn', eyebrow:'TRẠM 1 · KHỞI ĐỘNG',
  desc:'Làm quen với JavaScript: nó là gì, chạy ở đâu, và cách viết dòng code đầu tiên.',
  lessons:[
    {t:'JavaScript là gì?', c:`<p>JavaScript (JS) là ngôn ngữ lập trình của web, chạy trực tiếp trong trình duyệt để làm trang web "sống" — phản hồi click, thay đổi nội dung, gửi dữ liệu... Cùng với HTML (cấu trúc) và CSS (giao diện), JS là lớp thứ ba: <b>hành vi</b>.</p><p>JS cũng chạy được ngoài trình duyệt nhờ Node.js, dùng để viết server, công cụ dòng lệnh, app di động...</p>`},
    {t:'Nhúng JS vào trang HTML', c:`<p>Có 3 cách đưa JS vào trang: viết trực tiếp trong thẻ <code class="inline">&lt;script&gt;</code>, hoặc tách ra file <code class="inline">.js</code> riêng rồi liên kết bằng thuộc tính <code class="inline">src</code>.</p>
    <pre>&lt;script src="app.js" defer&gt;&lt;/script&gt;</pre>
    <div class="note-box">💡 Nên đặt thuộc tính <code class="inline">defer</code> để script chạy sau khi HTML đã tải xong.</div>`},
    {t:'Xuất dữ liệu (Output)', c:`<p>JS có nhiều cách "xuất" dữ liệu ra ngoài để bạn kiểm tra kết quả:</p>
    <pre><span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Ghi ra Console"</span>);
<span class="k">alert</span>(<span class="s">"Hộp thoại popup"</span>);
<span class="k">document</span>.<span class="fn">write</span>(<span class="s">"Ghi ra trang"</span>);</pre>
    <p><code class="inline">console.log()</code> là công cụ debug quan trọng nhất — mở DevTools (F12) để xem.</p>`},
    {t:'Câu lệnh & Cú pháp (Statements, Syntax)', c:`<p>Một chương trình JS là tập hợp các <b>câu lệnh</b> (statements), mỗi lệnh thường kết thúc bằng dấu chấm phẩy <code class="inline">;</code>. JS phân biệt hoa/thường (case-sensitive): <code class="inline">myVar</code> khác <code class="inline">myvar</code>.</p>
    <pre><span class="k">let</span> x = <span class="s">"Hà Nội"</span>;
<span class="k">let</span> y = <span class="s">"TP.HCM"</span>;
<span class="k">console</span>.<span class="fn">log</span>(x, y);</pre>`},
    {t:'Comment (chú thích)', c:`<p>Chú thích giúp giải thích code, JS bỏ qua không thực thi:</p>
    <pre><span class="c">// chú thích một dòng</span>
<span class="c">/* chú thích
   nhiều dòng */</span></pre>`}
  ]
},
{
  id:'vars', label:'Biến & Kiểu dữ liệu', eyebrow:'TRẠM 2 · NỀN TẢNG',
  desc:'Cách lưu trữ dữ liệu bằng biến, và các kiểu dữ liệu JS hỗ trợ.',
  lessons:[
    {t:'var, let, const — khai báo biến', c:`<p><code class="inline">let</code> khai báo biến có thể thay đổi giá trị, <code class="inline">const</code> khai báo hằng (không gán lại), <code class="inline">var</code> là cách khai báo cũ (nên tránh vì phạm vi rộng, dễ gây lỗi).</p>
    <pre><span class="k">let</span> tuoi = <span class="fn">25</span>;
tuoi = <span class="fn">26</span>; <span class="c">// hợp lệ</span>

<span class="k">const</span> PI = <span class="fn">3.14</span>;
<span class="c">// PI = 3; // lỗi! không thể gán lại const</span></pre>
    <div class="note-box">💡 Quy tắc: dùng <code class="inline">const</code> làm mặc định, chỉ dùng <code class="inline">let</code> khi biết chắc giá trị sẽ đổi.</div>`},
    {t:'Kiểu dữ liệu (Data Types)', c:`<p>JS có kiểu <b>nguyên thủy</b> (primitive): <code class="inline">String</code>, <code class="inline">Number</code>, <code class="inline">Boolean</code>, <code class="inline">undefined</code>, <code class="inline">null</code>, <code class="inline">BigInt</code>, <code class="inline">Symbol</code> — và kiểu <b>đối tượng</b> (object): <code class="inline">Object</code>, <code class="inline">Array</code>, <code class="inline">Function</code>.</p>
    <pre><span class="k">let</span> name = <span class="s">"An"</span>;      <span class="c">// String</span>
<span class="k">let</span> age = <span class="fn">20</span>;         <span class="c">// Number</span>
<span class="k">let</span> isStudent = <span class="fn">true</span>; <span class="c">// Boolean</span>
<span class="k">let</span> car = <span class="fn">null</span>;        <span class="c">// null</span>
<span class="k">let</span> job;                 <span class="c">// undefined</span></pre>`},
    {t:'typeof & chuyển đổi kiểu', c:`<p>Dùng <code class="inline">typeof</code> để kiểm tra kiểu dữ liệu. JS tự động chuyển kiểu (type coercion) khi cần, nhưng nên chuyển đổi rõ ràng để tránh lỗi khó lường.</p>
    <pre><span class="k">typeof</span> <span class="s">"An"</span>;      <span class="c">// "string"</span>
<span class="k">typeof</span> <span class="fn">10</span>;        <span class="c">// "number"</span>

<span class="k">Number</span>(<span class="s">"10"</span>);   <span class="c">// 10</span>
<span class="k">String</span>(<span class="fn">10</span>);      <span class="c">// "10"</span>
<span class="k">Boolean</span>(<span class="fn">0</span>);     <span class="c">// false</span></pre>`},
    {t:'Template literals', c:`<p>Dùng dấu backtick <code class="inline">\`</code> để nhúng biến trực tiếp vào chuỗi, thay cho nối chuỗi bằng <code class="inline">+</code>.</p>
    <pre><span class="k">let</span> name = <span class="s">"Lan"</span>;
<span class="k">console</span>.<span class="fn">log</span>(<span class="s">\`Xin chào \${name}!\`</span>);</pre>`}
  ]
},
{
  id:'ops', label:'Toán tử & Điều khiển luồng', eyebrow:'TRẠM 3 · LOGIC',
  desc:'Tính toán, so sánh và điều khiển chương trình chạy theo điều kiện hoặc lặp lại.',
  lessons:[
    {t:'Toán tử số học & gán', c:`<pre><span class="fn">10</span> + <span class="fn">5</span>;   <span class="c">// 15 (cộng)</span>
<span class="fn">10</span> % <span class="fn">3</span>;   <span class="c">// 1 (chia lấy dư)</span>
<span class="fn">2</span> ** <span class="fn">3</span>;  <span class="c">// 8 (lũy thừa)</span>

<span class="k">let</span> x = <span class="fn">5</span>;
x += <span class="fn">3</span>;  <span class="c">// x = 8</span>
x++;    <span class="c">// x = 9</span></pre>`},
    {t:'So sánh & Logic', c:`<p>Luôn dùng <code class="inline">===</code> / <code class="inline">!==</code> (so sánh nghiêm ngặt, không tự chuyển kiểu) thay vì <code class="inline">==</code>.</p>
    <pre><span class="fn">5</span> === <span class="s">"5"</span>;  <span class="c">// false (khác kiểu)</span>
<span class="fn">5</span> == <span class="s">"5"</span>;   <span class="c">// true (tự chuyển kiểu)</span>

<span class="fn">true</span> && <span class="fn">false</span>; <span class="c">// AND → false</span>
<span class="fn">true</span> || <span class="fn">false</span>; <span class="c">// OR  → true</span></pre>`},
    {t:'if...else & switch', c:`<pre><span class="k">let</span> diem = <span class="fn">8</span>;
<span class="k">if</span> (diem >= <span class="fn">8</span>) {
  <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Giỏi"</span>);
} <span class="k">else if</span> (diem >= <span class="fn">5</span>) {
  <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Trung bình"</span>);
} <span class="k">else</span> {
  <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Cần cố gắng"</span>);
}

<span class="k">switch</span> (diem) {
  <span class="k">case</span> <span class="fn">10</span>: <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Xuất sắc"</span>); <span class="k">break</span>;
  <span class="k">default</span>: <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Khác"</span>);
}</pre>`},
    {t:'Vòng lặp: for, while, for...of/in', c:`<pre><span class="k">for</span> (<span class="k">let</span> i = <span class="fn">0</span>; i < <span class="fn">3</span>; i++) {
  <span class="k">console</span>.<span class="fn">log</span>(i); <span class="c">// 0 1 2</span>
}

<span class="k">let</span> arr = [<span class="s">"a"</span>,<span class="s">"b"</span>,<span class="s">"c"</span>];
<span class="k">for</span> (<span class="k">const</span> item <span class="k">of</span> arr) { <span class="k">console</span>.<span class="fn">log</span>(item); }

<span class="k">let</span> i = <span class="fn">0</span>;
<span class="k">while</span> (i < <span class="fn">3</span>) { i++; }</pre>
    <div class="note-box">💡 <code class="inline">for...of</code> lặp qua giá trị (array), <code class="inline">for...in</code> lặp qua key (object).</div>`}
  ]
},
{
  id:'functions', label:'Hàm & Phạm vi', eyebrow:'TRẠM 4 · TÁI SỬ DỤNG CODE',
  desc:'Đóng gói logic thành hàm, hiểu scope, hoisting, closure và this.',
  lessons:[
    {t:'Khai báo hàm & Arrow function', c:`<pre><span class="k">function</span> <span class="fn">cong</span>(a, b) {
  <span class="k">return</span> a + b;
}

<span class="c">// Arrow function — cú pháp ngắn gọn</span>
<span class="k">const</span> cong2 = (a, b) => a + b;

<span class="fn">cong</span>(<span class="fn">2</span>,<span class="fn">3</span>); <span class="c">// 5</span></pre>`},
    {t:'Tham số mặc định & Rest', c:`<pre><span class="k">function</span> <span class="fn">chao</span>(ten = <span class="s">"bạn"</span>) {
  <span class="k">return</span> <span class="s">\`Chào \${ten}\`</span>;
}

<span class="k">function</span> <span class="fn">tongTatCa</span>(...so) {
  <span class="k">return</span> so.<span class="fn">reduce</span>((a,b)=>a+b, <span class="fn">0</span>);
}
<span class="fn">tongTatCa</span>(<span class="fn">1</span>,<span class="fn">2</span>,<span class="fn">3</span>); <span class="c">// 6</span></pre>`},
    {t:'Scope (Phạm vi) & Hoisting', c:`<p>Biến khai báo bằng <code class="inline">let</code>/<code class="inline">const</code> chỉ tồn tại trong <b>block</b> chứa nó (block scope). <code class="inline">var</code> có <b>function scope</b>, rộng hơn và dễ gây lỗi.</p>
    <p><b>Hoisting</b>: JS "kéo" khai báo hàm/biến lên đầu phạm vi trước khi chạy — hàm khai báo bằng <code class="inline">function</code> có thể gọi trước khi định nghĩa, nhưng <code class="inline">let</code>/<code class="inline">const</code> thì không (rơi vào "vùng chết" - temporal dead zone).</p>`},
    {t:'Closure', c:`<p>Closure là khi một hàm "nhớ" được biến ở phạm vi bên ngoài, ngay cả sau khi hàm ngoài đã chạy xong. Đây là nền tảng cho state riêng tư, module pattern...</p>
    <pre><span class="k">function</span> <span class="fn">taoBoDem</span>() {
  <span class="k">let</span> count = <span class="fn">0</span>;
  <span class="k">return</span> () => ++count;
}
<span class="k">const</span> dem = <span class="fn">taoBoDem</span>();
dem(); <span class="c">// 1</span>
dem(); <span class="c">// 2 — count được "nhớ" giữa các lần gọi</span></pre>`},
    {t:'từ khoá this', c:`<p><code class="inline">this</code> tham chiếu đến "chủ thể" gọi hàm. Trong object method, <code class="inline">this</code> là object đó; trong arrow function, <code class="inline">this</code> lấy từ phạm vi bên ngoài (không tự có <code class="inline">this</code> riêng).</p>
    <pre><span class="k">const</span> user = {
  name: <span class="s">"Mai"</span>,
  <span class="fn">greet</span>() { <span class="k">return</span> <span class="k">this</span>.name; }
};
user.<span class="fn">greet</span>(); <span class="c">// "Mai"</span></pre>`}
  ]
},
{
  id:'structures', label:'Cấu trúc dữ liệu', eyebrow:'TRẠM 5 · TỔ CHỨC DỮ LIỆU',
  desc:'String, Array, Object, Set, Map và các kỹ thuật hiện đại: destructuring, spread.',
  lessons:[
    {t:'String & phương thức chuỗi', c:`<pre><span class="k">let</span> s = <span class="s">"JavaScript"</span>;
s.<span class="fn">length</span>;            <span class="c">// 10</span>
s.<span class="fn">toUpperCase</span>();     <span class="c">// "JAVASCRIPT"</span>
s.<span class="fn">slice</span>(<span class="fn">0</span>,<span class="fn">4</span>);       <span class="c">// "Java"</span>
s.<span class="fn">includes</span>(<span class="s">"Script"</span>); <span class="c">// true</span>
s.<span class="fn">split</span>(<span class="s">""</span>);        <span class="c">// ["J","a","v"...]</span></pre>`},
    {t:'Array & phương thức mảng', c:`<pre><span class="k">let</span> nums = [<span class="fn">1</span>,<span class="fn">2</span>,<span class="fn">3</span>,<span class="fn">4</span>];
nums.<span class="fn">map</span>(n => n*<span class="fn">2</span>);      <span class="c">// [2,4,6,8]</span>
nums.<span class="fn">filter</span>(n => n%<span class="fn">2</span>===<span class="fn">0</span>); <span class="c">// [2,4]</span>
nums.<span class="fn">reduce</span>((a,b)=>a+b);   <span class="c">// 10</span>
nums.<span class="fn">find</span>(n => n>2);       <span class="c">// 3</span>
nums.<span class="fn">push</span>(<span class="fn">5</span>); nums.<span class="fn">pop</span>();</pre>
    <div class="note-box">💡 <code class="inline">map/filter/reduce</code> là "tam giác vàng" xử lý mảng — không cần for-loop thủ công.</div>`},
    {t:'Object & Destructuring', c:`<pre><span class="k">const</span> user = { name: <span class="s">"Nam"</span>, age: <span class="fn">22</span> };
<span class="k">const</span> { name, age } = user; <span class="c">// tách thuộc tính ra biến</span>

<span class="k">const</span> [a, b] = [<span class="fn">1</span>,<span class="fn">2</span>]; <span class="c">// destructuring array</span></pre>`},
    {t:'Spread & Rest operator', c:`<pre><span class="k">const</span> arr1 = [<span class="fn">1</span>,<span class="fn">2</span>];
<span class="k">const</span> arr2 = [...arr1, <span class="fn">3</span>]; <span class="c">// [1,2,3] — sao chép + mở rộng</span>

<span class="k">const</span> obj2 = {...user, age: <span class="fn">23</span>}; <span class="c">// clone + override</span></pre>`},
    {t:'Set & Map', c:`<p><code class="inline">Set</code> lưu các giá trị <b>không trùng lặp</b>. <code class="inline">Map</code> lưu cặp key-value, key có thể là bất kỳ kiểu dữ liệu.</p>
    <pre><span class="k">const</span> s = <span class="k">new</span> <span class="fn">Set</span>([<span class="fn">1</span>,<span class="fn">1</span>,<span class="fn">2</span>]); <span class="c">// Set{1,2}</span>
<span class="k">const</span> m = <span class="k">new</span> <span class="fn">Map</span>();
m.<span class="fn">set</span>(<span class="s">"a"</span>, <span class="fn">1</span>);</pre>`},
    {t:'JSON', c:`<p>JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu văn bản, dùng phổ biến khi giao tiếp với API.</p>
    <pre><span class="k">JSON</span>.<span class="fn">stringify</span>(user); <span class="c">// object → chuỗi JSON</span>
<span class="k">JSON</span>.<span class="fn">parse</span>(jsonStr); <span class="c">// chuỗi JSON → object</span></pre>`}
  ]
},
{
  id:'dom', label:'DOM & Sự kiện', eyebrow:'TRẠM 6 · TƯƠNG TÁC TRANG WEB',
  desc:'Chọn, thay đổi phần tử HTML và phản hồi hành động của người dùng.',
  lessons:[
    {t:'DOM là gì?', c:`<p>DOM (Document Object Model) là "cây" đại diện cho cấu trúc HTML mà JS có thể đọc và thay đổi trong lúc trang đang chạy.</p>`},
    {t:'Chọn phần tử', c:`<pre><span class="k">document</span>.<span class="fn">getElementById</span>(<span class="s">"title"</span>);
<span class="k">document</span>.<span class="fn">querySelector</span>(<span class="s">".card"</span>);
<span class="k">document</span>.<span class="fn">querySelectorAll</span>(<span class="s">"li"</span>);</pre>`},
    {t:'Thay đổi nội dung & style', c:`<pre><span class="k">const</span> el = <span class="k">document</span>.<span class="fn">querySelector</span>(<span class="s">"#title"</span>);
el.<span class="fn">textContent</span> = <span class="s">"Xin chào"</span>;
el.<span class="fn">style</span>.color = <span class="s">"red"</span>;
el.<span class="fn">classList</span>.<span class="fn">add</span>(<span class="s">"active"</span>);</pre>`},
    {t:'Sự kiện (Events)', c:`<pre><span class="k">const</span> btn = <span class="k">document</span>.<span class="fn">querySelector</span>(<span class="s">"button"</span>);
btn.<span class="fn">addEventListener</span>(<span class="s">"click"</span>, () => {
  <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Đã click!"</span>);
});</pre>
    <p>Các sự kiện phổ biến: <code class="inline">click</code>, <code class="inline">input</code>, <code class="inline">submit</code>, <code class="inline">keydown</code>, <code class="inline">load</code>.</p>`},
    {t:'Event Bubbling', c:`<p>Khi một sự kiện xảy ra trên phần tử con, nó "nổi bong bóng" lên các phần tử cha. Dùng <code class="inline">event.stopPropagation()</code> để chặn, hoặc lợi dụng nó để làm <b>event delegation</b> (gắn 1 listener ở cha để xử lý nhiều con).</p>`},
    {t:'BOM — tương tác với trình duyệt', c:`<pre><span class="k">window</span>.<span class="fn">innerWidth</span>;
<span class="k">location</span>.<span class="fn">href</span>;
<span class="k">history</span>.<span class="fn">back</span>();
<span class="k">navigator</span>.<span class="fn">userAgent</span>;</pre>`}
  ]
},
{
  id:'async', label:'Lập trình bất đồng bộ', eyebrow:'TRẠM 7 · KHÔNG CHỜ, VẪN CHẠY',
  desc:'Xử lý các tác vụ mất thời gian (gọi API, đợi timer) mà không "đứng hình" trang web.',
  lessons:[
    {t:'setTimeout / setInterval', c:`<pre><span class="k">setTimeout</span>(() => <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Chạy sau 1s"</span>), <span class="fn">1000</span>);
<span class="k">setInterval</span>(() => <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"lặp mỗi 2s"</span>), <span class="fn">2000</span>);</pre>`},
    {t:'Callback & "callback hell"', c:`<p>Callback là hàm truyền vào hàm khác để gọi lại sau. Khi nhiều callback lồng nhau, code trở nên khó đọc — gọi là <b>callback hell</b>. Promise ra đời để giải quyết vấn đề này.</p>`},
    {t:'Promise', c:`<p>Promise đại diện cho một giá trị <b>sẽ có trong tương lai</b>: đang chờ (pending), thành công (fulfilled) hoặc lỗi (rejected).</p>
    <pre><span class="k">const</span> p = <span class="k">new</span> <span class="fn">Promise</span>((resolve, reject) => {
  <span class="k">setTimeout</span>(() => resolve(<span class="s">"Xong!"</span>), <span class="fn">1000</span>);
});
p.<span class="fn">then</span>(ketQua => <span class="k">console</span>.<span class="fn">log</span>(ketQua))
 .<span class="fn">catch</span>(err => <span class="k">console</span>.<span class="fn">error</span>(err));</pre>`},
    {t:'Async/Await', c:`<p><code class="inline">async/await</code> là cú pháp giúp code bất đồng bộ đọc như code đồng bộ, dễ hiểu hơn <code class="inline">.then()</code> lồng nhau.</p>
    <pre><span class="k">async function</span> <span class="fn">layDuLieu</span>() {
  <span class="k">try</span> {
    <span class="k">const</span> res = <span class="k">await</span> <span class="fn">fetch</span>(<span class="s">"/api/user"</span>);
    <span class="k">const</span> data = <span class="k">await</span> res.<span class="fn">json</span>();
    <span class="k">console</span>.<span class="fn">log</span>(data);
  } <span class="k">catch</span> (err) {
    <span class="k">console</span>.<span class="fn">error</span>(<span class="s">"Lỗi:"</span>, err);
  }
}</pre>`},
    {t:'Fetch API', c:`<p><code class="inline">fetch()</code> gửi request HTTP đến server, trả về một Promise chứa Response.</p>
    <pre><span class="fn">fetch</span>(<span class="s">"https://api.example.com/data"</span>)
  .<span class="fn">then</span>(res => res.<span class="fn">json</span>())
  .<span class="fn">then</span>(data => <span class="k">console</span>.<span class="fn">log</span>(data));</pre>`},
    {t:'Event Loop (khái quát)', c:`<p>JS chỉ có <b>một luồng</b> (single-threaded), nhưng xử lý bất đồng bộ nhờ <b>Event Loop</b>: các tác vụ như setTimeout, Promise được đưa vào hàng đợi và chạy khi luồng chính rảnh — đó là lý do code bất đồng bộ không làm "đứng" trang.</p>`}
  ]
},
{
  id:'oop', label:'OOP & ES6+ hiện đại', eyebrow:'TRẠM 8 · TƯ DUY HƯỚNG ĐỐI TƯỢNG',
  desc:'Class, kế thừa, module và các tính năng ES6+ giúp code hiện đại, gọn gàng hơn.',
  lessons:[
    {t:'Class & Constructor', c:`<pre><span class="k">class</span> <span class="fn">Animal</span> {
  <span class="fn">constructor</span>(name) {
    <span class="k">this</span>.name = name;
  }
  <span class="fn">speak</span>() {
    <span class="k">return</span> <span class="s">\`\${this.name} kêu một tiếng\`</span>;
  }
}
<span class="k">const</span> cat = <span class="k">new</span> <span class="fn">Animal</span>(<span class="s">"Mèo"</span>);
cat.<span class="fn">speak</span>();</pre>`},
    {t:'Kế thừa (Inheritance) & Prototype', c:`<p>Mọi object trong JS đều kế thừa từ một "prototype". <code class="inline">class</code> là cú pháp dễ đọc hơn cho cơ chế prototype này.</p>
    <pre><span class="k">class</span> <span class="fn">Dog</span> <span class="k">extends</span> <span class="fn">Animal</span> {
  <span class="fn">speak</span>() {
    <span class="k">return</span> <span class="s">\`\${this.name} sủa: Gâu!\`</span>;
  }
}
<span class="k">new</span> <span class="fn">Dog</span>(<span class="s">"Rex"</span>).<span class="fn">speak</span>();</pre>`},
    {t:'Modules (import/export)', c:`<pre><span class="c">// math.js</span>
<span class="k">export</span> <span class="k">function</span> <span class="fn">cong</span>(a,b){ <span class="k">return</span> a+b; }

<span class="c">// main.js</span>
<span class="k">import</span> { cong } <span class="k">from</span> <span class="s">"./math.js"</span>;</pre>
    <p>Modules giúp chia code thành nhiều file, dễ tái sử dụng và bảo trì.</p>`},
    {t:'Optional chaining & Nullish coalescing', c:`<pre><span class="k">const</span> ten = user?.profile?.ten; <span class="c">// không lỗi nếu profile undefined</span>
<span class="k">const</span> gia = input ?? <span class="fn">0</span>; <span class="c">// dùng 0 nếu input là null/undefined</span></pre>`},
    {t:'Getter/Setter & static', c:`<pre><span class="k">class</span> <span class="fn">HinhTron</span> {
  <span class="fn">constructor</span>(r){ <span class="k">this</span>.r = r; }
  <span class="k">get</span> <span class="fn">dienTich</span>(){ <span class="k">return</span> <span class="k">Math</span>.PI * <span class="k">this</span>.r ** <span class="fn">2</span>; }
  <span class="k">static</span> <span class="fn">soLuong</span>(){ <span class="k">return</span> <span class="s">"đếm số hình tròn"</span>; }
}</pre>`}
  ]
},
{
  id:'advanced', label:'Nâng cao & Thực chiến', eyebrow:'TRẠM 9 · SẴN SÀNG RA TRẬN',
  desc:'Xử lý lỗi, gỡ lỗi, quy tắc viết code sạch và bước tiếp theo sau khi hoàn thành lộ trình.',
  lessons:[
    {t:'try...catch & Error handling', c:`<pre><span class="k">try</span> {
  <span class="k">JSON</span>.<span class="fn">parse</span>(<span class="s">"dữ liệu lỗi"</span>);
} <span class="k">catch</span> (err) {
  <span class="k">console</span>.<span class="fn">error</span>(<span class="s">"Có lỗi:"</span>, err.message);
} <span class="k">finally</span> {
  <span class="k">console</span>.<span class="fn">log</span>(<span class="s">"Luôn chạy dù lỗi hay không"</span>);
}</pre>`},
    {t:'Strict mode', c:`<p>Thêm <code class="inline">"use strict";</code> ở đầu file/hàm để JS báo lỗi rõ ràng hơn với các lỗi ngầm (VD: gán giá trị cho biến chưa khai báo), giúp code an toàn hơn.</p>`},
    {t:'Regular Expressions (RegExp)', c:`<pre><span class="k">const</span> re = <span class="fn">/^[a-z0-9]+@[a-z]+\\.[a-z]+$/i</span>;
re.<span class="fn">test</span>(<span class="s">"abc@gmail.com"</span>); <span class="c">// true</span></pre>`},
    {t:'Debugging & DevTools', c:`<p>Dùng <code class="inline">debugger;</code> trong code hoặc đặt breakpoint trong tab Sources của DevTools để dừng chương trình và kiểm tra biến từng bước.</p>`},
    {t:'Quy tắc viết code sạch & lỗi thường gặp', c:`<ul>
      <li>Ưu tiên <code class="inline">const</code>, tránh <code class="inline">var</code></li>
      <li>Luôn dùng <code class="inline">===</code> thay vì <code class="inline">==</code></li>
      <li>Đặt tên biến/hàm rõ nghĩa, theo camelCase</li>
      <li>Tách logic thành hàm nhỏ, mỗi hàm một nhiệm vụ</li>
      <li>Luôn xử lý lỗi khi gọi API (try/catch, .catch)</li>
    </ul>`},
    {t:'Bước tiếp theo — Hero rồi làm gì?', c:`<p>Sau lộ trình này, hãy thử: xây một ứng dụng Todo-list, gọi một API công khai để hiển thị dữ liệu thật, học một framework (React/Vue), hoặc tìm hiểu TypeScript để viết JS có kiểu dữ liệu an toàn hơn.</p>`}
  ]
}
];

/* =========================================================
   DATA: Flashcards
   ========================================================= */
let flashcards = [
  {q:"let vs const khác gì?", a:"let cho phép gán lại giá trị; const không thể gán lại sau khi khai báo (nhưng nội dung object/array bên trong const vẫn có thể thay đổi).", stage:"vars"},
  {q:"typeof null trả về gì?", a:'"object" — đây là một lỗi lịch sử nổi tiếng của JavaScript, null thực chất không phải object.', stage:"vars"},
  {q:"=== khác == như thế nào?", a:"=== so sánh nghiêm ngặt (không tự chuyển kiểu), == tự chuyển kiểu trước khi so sánh. Nên luôn dùng ===.", stage:"ops"},
  {q:"for...of và for...in khác nhau ở đâu?", a:"for...of lặp qua giá trị (dùng cho array, string...), for...in lặp qua key/index (dùng cho object).", stage:"ops"},
  {q:"Closure là gì?", a:"Là khả năng một hàm 'nhớ' được các biến ở phạm vi bên ngoài nó, ngay cả sau khi hàm ngoài đã thực thi xong.", stage:"functions"},
  {q:"Hoisting là gì?", a:"Cơ chế JS 'kéo' khai báo biến/hàm lên đầu phạm vi trước khi code chạy. function được hoisting toàn phần, let/const rơi vào 'vùng chết' (TDZ).", stage:"functions"},
  {q:"this trong arrow function hoạt động thế nào?", a:"Arrow function không có this riêng — nó lấy this từ phạm vi (scope) bao quanh nơi nó được định nghĩa.", stage:"functions"},
  {q:"map() và forEach() khác gì?", a:"map() trả về một array MỚI chứa kết quả; forEach() chỉ thực thi hành động, không trả về array mới.", stage:"structures"},
  {q:"Spread operator (...) dùng để làm gì?", a:"Dùng để 'trải' các phần tử của array/object ra, thường dùng để clone hoặc gộp array/object.", stage:"structures"},
  {q:"Set khác Array ở điểm nào?", a:"Set chỉ lưu các giá trị duy nhất (không trùng lặp), còn Array cho phép trùng lặp.", stage:"structures"},
  {q:"Event bubbling là gì?", a:"Khi sự kiện xảy ra ở phần tử con, nó sẽ 'nổi' lên qua các phần tử cha theo thứ tự từ trong ra ngoài.", stage:"dom"},
  {q:"querySelector và getElementById khác gì?", a:"querySelector nhận CSS selector bất kỳ (linh hoạt hơn); getElementById chỉ tìm theo id, nhưng nhanh hơn.", stage:"dom"},
  {q:"Promise có 3 trạng thái nào?", a:"pending (đang chờ), fulfilled (thành công), rejected (thất bại).", stage:"async"},
  {q:"async/await giúp gì so với .then()?", a:"Giúp code bất đồng bộ đọc tuyến tính như code đồng bộ, dễ đọc và dễ debug hơn callback/then lồng nhau.", stage:"async"},
  {q:"JS là ngôn ngữ đơn luồng, vậy sao chạy bất đồng bộ được?", a:"Nhờ Event Loop: các tác vụ bất đồng bộ được đưa vào hàng đợi và chạy khi luồng chính (main thread) rảnh.", stage:"async"},
  {q:"class trong JS thực chất dựa trên cơ chế gì?", a:"Dựa trên prototype — class chỉ là cú pháp (syntactic sugar) giúp làm việc với prototype dễ đọc hơn.", stage:"oop"},
  {q:"Optional chaining ?. dùng khi nào?", a:"Khi truy cập thuộc tính lồng sâu mà không chắc các cấp trung gian có tồn tại, tránh lỗi 'cannot read property of undefined'.", stage:"oop"},
  {q:"try...catch...finally hoạt động ra sao?", a:"try chạy code có thể lỗi; catch xử lý khi có lỗi; finally luôn chạy dù có lỗi hay không.", stage:"advanced"},
  {q:"Vì sao nên dùng 'use strict'?", a:"Giúp JS phát hiện và báo lỗi rõ ràng với các lỗi ngầm (như gán biến chưa khai báo), làm code an toàn hơn.", stage:"advanced"},
  {q:"JSON.stringify và JSON.parse khác gì?", a:"stringify chuyển object/array JS thành chuỗi JSON; parse chuyển chuỗi JSON ngược lại thành object/array JS.", stage:"structures"},
  {q:"console.log() dùng để làm gì?", a:"In giá trị ra Console của DevTools, công cụ debug cơ bản và quan trọng nhất khi học JS.", stage:"basics"},
  {q:"defer trong <script> có tác dụng gì?", a:"Giúp trình duyệt tải HTML xong rồi mới chạy script, tránh lỗi do JS chạy trước khi phần tử HTML tồn tại.", stage:"basics"}
];
flashcards.forEach((c,i) => { c.id = 'b' + i; });

/* =========================================================
   STATE
   ========================================================= */
const STORAGE_KEY = 'jsrail_v1';
let currentStageIdx = 0;
let completedStages = new Set();
let deckOrder = flashcards.map((_,i)=>i);
let notes = {}; // key: `${stageId}_${lessonIndex}` -> ghi chú của người dùng

/* =========================================================
   LƯU TRỮ: localStorage tự động + xuất/nhập file .json
   ========================================================= */
function gatherData(){
  return {
    completedStages: [...completedStages],
    currentStageIdx,
    knownIds: flashcards.filter(c => c && c.known).map(c => c.id),
    customCards: flashcards.filter(c => c && c.custom).map(c => ({id:c.id, q:c.q, a:c.a, stage:c.stage})),
    notes
  };
}

function applyData(data, restoreCurrentStage){
  if(Array.isArray(data.completedStages)) data.completedStages.forEach(i => completedStages.add(i));
  if(restoreCurrentStage && typeof data.currentStageIdx === 'number' && stages[data.currentStageIdx]){
    currentStageIdx = data.currentStageIdx;
  }
  if(Array.isArray(data.customCards)){
    data.customCards.forEach(c => {
      if(!flashcards.some(f => f && f.id === c.id)){
        flashcards.push({...c, custom:true});
        deckOrder.push(flashcards.length - 1);
      }
    });
  }
  if(Array.isArray(data.knownIds)){
    const knownSet = new Set(data.knownIds);
    flashcards.forEach(c => { if(c) c.known = !!c.known || knownSet.has(c.id); });
  }
  if(data.notes && typeof data.notes === 'object') notes = {...notes, ...data.notes};
}

function saveAll(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gatherData()));
    setStorageStatus('💾 Đã lưu tự động trên máy này');
  }catch(e){
    setStorageStatus('⚠️ Không lưu được vào bộ nhớ máy — dữ liệu chỉ giữ trong phiên này');
  }
}

function loadAll(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) applyData(JSON.parse(raw), true);
  }catch(e){ /* dữ liệu lưu trữ lỗi hoặc không có — bỏ qua, chạy như lần đầu */ }
}

function setStorageStatus(msg){
  const el = document.getElementById('storage-status');
  if(el) el.textContent = msg;
}

function exportData(){
  const blob = new Blob([JSON.stringify(gatherData(), null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jsrail-luu-tru.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importData(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data = JSON.parse(reader.result);
      applyData(data, false);
      saveAll();
      renderStage();
      renderDeck();
      alert('Đã nhập dữ liệu từ file thành công!');
    }catch(e){
      alert('File lưu trữ không hợp lệ — hãy chọn đúng file .json đã xuất từ trang này.');
    }
  };
  reader.readAsText(file);
  evt.target.value = '';
}

/* =========================================================
   RENDER: Rail (desktop) + Mobile stepper
   ========================================================= */
function renderRail(){
  const rail = document.getElementById('rail-line');
  const mob = document.getElementById('mobile-stepper');
  rail.innerHTML = '';
  mob.innerHTML = '';
  stages.forEach((s, i) => {
    const st = document.createElement('div');
    st.className = 'station' + (i===currentStageIdx ? ' current' : '') + (completedStages.has(i) ? ' done' : '');
    st.innerHTML = `<button onclick="goToStage(${i})">${s.label}<small>${s.lessons.length} bài</small></button>`;
    rail.appendChild(st);

    const mb = document.createElement('button');
    mb.className = i===currentStageIdx ? 'current' : '';
    mb.textContent = (i+1) + '. ' + s.label;
    mb.onclick = () => goToStage(i);
    mob.appendChild(mb);
  });
  document.getElementById('rail-bar-fill').style.width = (completedStages.size/stages.length*100) + '%';
  document.getElementById('progress-pill').textContent = `${completedStages.size}/${stages.length} trạm · đã học`;
}

function renderStage(){
  const s = stages[currentStageIdx];
  document.getElementById('stage-eyebrow').textContent = s.eyebrow;
  document.getElementById('stage-title').textContent = s.label;
  document.getElementById('stage-desc').textContent = s.desc;
  const list = document.getElementById('lesson-list');
  list.innerHTML = s.lessons.map((l,i)=>{
    const key = s.id + '_' + i;
    const noteVal = notes[key] || '';
    return `
    <div class="lesson-card">
      <h3>${l.t} <span class="tag">Bài ${i+1}/${s.lessons.length}</span></h3>
      ${l.c}
      <div class="keep-note">
        <label>📌 Ghi chú của bạn (tự lưu)</label>
        <textarea rows="2" placeholder="Viết điều bạn muốn nhớ về bài này..." data-key="${key}" oninput="saveNote(this.dataset.key, this.value)">${escapeHtml(noteVal)}</textarea>
      </div>
    </div>
  `;
  }).join('');
  document.getElementById('prev-stage').disabled = currentStageIdx===0;
  document.getElementById('prev-stage').style.opacity = currentStageIdx===0 ? .4 : 1;
  document.getElementById('next-stage').textContent = currentStageIdx===stages.length-1 ? 'Hoàn thành ✓' : 'Trạm tiếp theo →';
  renderRail();
}

function goToStage(i){
  if(currentStageIdx !== i) completedStages.add(currentStageIdx);
  currentStageIdx = i;
  renderStage();
  saveAll();
  window.scrollTo({top: document.getElementById('stage-wrap').offsetTop - 80, behavior:'smooth'});
}

document.getElementById('prev-stage').onclick = () => { if(currentStageIdx>0) goToStage(currentStageIdx-1); };
document.getElementById('next-stage').onclick = () => {
  completedStages.add(currentStageIdx);
  if(currentStageIdx < stages.length-1) goToStage(currentStageIdx+1);
  else { renderRail(); saveAll(); }
};

/* =========================================================
   FLASHCARDS
   ========================================================= */
function stageLabel(id){ const s = stages.find(x=>x.id===id); return s ? s.label : 'Ghi chú của bạn'; }

function populateFilters(){
  const filter = document.getElementById('flash-filter');
  const nfStage = document.getElementById('nf-stage');
  filter.innerHTML = `<option value="all">Tất cả trạm</option>` + stages.map(s=>`<option value="${s.id}">${s.label}</option>`).join('') + `<option value="custom">Ghi chú của tôi</option>`;
  nfStage.innerHTML = stages.map(s=>`<option value="${s.id}">${s.label}</option>`).join('') + `<option value="custom">Ghi chú riêng (không thuộc trạm)</option>`;
}

function renderDeck(){
  const filter = document.getElementById('flash-filter').value || 'all';
  const q = (document.getElementById('flash-search').value || '').toLowerCase();
  const deck = document.getElementById('deck');
  let items = deckOrder.map(i=>({...flashcards[i], idx:i}))
    .filter(c => filter==='all' || c.stage===filter)
    .filter(c => c.q.toLowerCase().includes(q) || c.a.toLowerCase().includes(q));

  document.getElementById('deck-stats').textContent = `${items.length} thẻ · ${flashcards.filter(c=>c && c.known).length} đã nhớ`;

  if(items.length===0){
    deck.innerHTML = `<div class="empty-state">Không có flashcard nào khớp. Hãy thử bộ lọc khác hoặc thêm flashcard mới ở trên ↑</div>`;
    return;
  }

  deck.innerHTML = items.map(c => `
    <div class="card-scene" id="scene-${c.idx}">
      <div class="flip-card" onclick="toggleFlip(${c.idx})">
        <div class="face front">
          <div class="eyebrow">${stageLabel(c.stage)}</div>
          <div class="body-txt">${escapeHtml(c.q)}</div>
          <div class="hint">bấm để lật ↻</div>
        </div>
        <div class="face back">
          <div class="eyebrow">TRẢ LỜI</div>
          <div class="body-txt">${escapeHtml(c.a)}</div>
          <div class="hint">bấm để lật lại</div>
        </div>
      </div>
      <div class="card-actions">
        <button class="mark-known ${c.known?'on':''}" onclick="event.stopPropagation(); toggleKnown(${c.idx})">${c.known ? '✓ Đã nhớ' : 'Đánh dấu đã nhớ'}</button>
        ${c.custom ? `<button onclick="event.stopPropagation(); deleteCard(${c.idx})">🗑 Xoá</button>` : ''}
      </div>
    </div>
  `).join('');
}

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function toggleFlip(i){
  document.getElementById('scene-'+i).classList.toggle('flipped');
}
function toggleKnown(i){
  flashcards[i].known = !flashcards[i].known;
  renderDeck();
  saveAll();
}
function deleteCard(i){
  flashcards[i] = null;
  deckOrder = deckOrder.filter(x => flashcards[x] !== null);
  renderDeck();
  saveAll();
}
function shuffleDeck(){
  for(let i = deckOrder.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [deckOrder[i], deckOrder[j]] = [deckOrder[j], deckOrder[i]];
  }
  renderDeck();
}
function addCustomCard(){
  const front = document.getElementById('nf-front').value.trim();
  const back = document.getElementById('nf-back').value.trim();
  const stage = document.getElementById('nf-stage').value;
  if(!front || !back){ alert('Hãy điền cả mặt trước và mặt sau của flashcard.'); return; }
  const id = 'c' + Date.now() + Math.random().toString(36).slice(2,6);
  flashcards.push({id, q:front, a:back, stage:stage, custom:true});
  deckOrder.push(flashcards.length-1);
  document.getElementById('nf-front').value = '';
  document.getElementById('nf-back').value = '';
  renderDeck();
  saveAll();
}
function saveNote(key, value){
  notes[key] = value;
  saveAll();
}
document.getElementById('flash-filter').addEventListener('change', renderDeck);
document.getElementById('flash-search').addEventListener('input', renderDeck);

/* =========================================================
   MODE SWITCH
   ========================================================= */
function switchMode(mode){
  document.querySelectorAll('.modes button').forEach(b => b.classList.toggle('active', b.dataset.mode===mode));
  document.getElementById('learn-hero').style.display = mode==='learn' ? '' : 'none';
  document.getElementById('stage-wrap').style.display = mode==='learn' ? '' : 'none';
  document.getElementById('flash-wrap').style.display = mode==='flash' ? '' : 'none';
  if(mode==='flash') window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('.modes button').forEach(b => b.addEventListener('click', () => switchMode(b.dataset.mode)));

/* =========================================================
   Hero terminal typing effect
   ========================================================= */
(function typeHero(){
  const text = '"Hero 🎉";';
  const el = document.getElementById('typed-out');
  let i = 0;
  function tick(){
    if(i <= text.length){
      el.textContent = text.slice(0,i);
      i++;
      setTimeout(tick, 90);
    }
  }
  tick();
})();

/* =========================================================
   INIT
   ========================================================= */
loadAll();
populateFilters();
renderStage();
renderDeck();
