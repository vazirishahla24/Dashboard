const time = document.querySelector(".time");

const fetchTime = async() => {
    try {
        const response = await fetch(`https://kaaryar0506reactblog.liara.run/current/time`);
        const data = await response.json();
        format(2);
        return data;

    } catch (error) {
        console.log(error);
    }
};

const times = fetchTime();

times.then((e) => {
    var s = e.current;
    var date = new Date(s);

    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };

    console.log(e);

    var ghamari = date.toLocaleDateString('ar-TN-u-ca-islamic', options);
    ghamari = ghamari.replace('هـ', '');
    ghamari = ghamari.replace(' ', '/');


    var miladi = date.toLocaleDateString('en-CA', options);
    miladi = miladi.replace(',', '/');
    miladi = miladi.replace(' ', '/');

    time.innerHTML +=
        `<h1>${date.getHours().toLocaleString('fa-ir')}:${date.getMinutes().toLocaleString('fa-ir')}</h1>
            <h3 class="direction-rtl">${e.shamsi.dayInMonth} ${e.shamsi.month}</h3>
            <p class="d-flex">
                <span>${miladi}</span>
                <span>${ghamari}</span>
            </p>
            <div>
                <select class="direction-rtl">
                    <option value="">اوقات شرعی</option>
                </select>
                <select class="direction-rtl">
                    <option value="">تایمر</option>
                </select>
            </div>`;
})