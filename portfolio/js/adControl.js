function enableAds(itemID, mode) {

    var x = document.getElementsByClassName('choiceItem'),
        y = document.getElementsByClassName('mobileChoiceItem'),
        xLength = x.length;

    var iframe = document.getElementById("mockFrame");

    if (flag == false) {
        iframe.src = './desktopMock/index.html';

        document.getElementById('phone').addEventListener('click', cpCLick);
        document.getElementById('phone').style.cursor = 'pointer';
    }

    function changeSrc(slot1, slot2, slot3, slot4, index) {

        flag = true;

        setTimeout(() => {
            var el_300x600 = iframe.contentWindow.document.getElementById('iframe-300x600'),
                el_300x250 = iframe.contentWindow.document.getElementById('iframe-300x250'),
                el_728x90 = iframe.contentWindow.document.getElementById('iframe-728x90'),
                el_970x250 = iframe.contentWindow.document.getElementById('iframe-970x250');

            el_300x600.src = slot1;
            el_300x250.src = slot2;
            el_728x90.src = slot3;
            el_970x250.src = slot4;

            for (var i = 0; i < xLength; i++) {
                if (i == index) {
                    x[i].style.color = '#6699cc';
                    y[i].style.color = '#6699cc';
                } else {
                    x[i].style.color = '#ffffff';
                    y[i].style.color = '#ffffff';
                }
            }
        }, 100);

    }

    function changeMock(src, index) {
        pcCLick();

        iframe.src = src;
        flag = false;

        document.getElementById('phone').removeEventListener('click', cpCLick);
        document.getElementById('phone').style.cursor = 'not-allowed';

        for (var i = 0; i < xLength; i++) {
            if (i == index) {
                x[i].style.color = '#6699cc';
                y[i].style.color = '#6699cc';
            } else {
                x[i].style.color = '#ffffff';
                y[i].style.color = '#ffffff';
            }
        }
    }

    function openNew(src, index) {

        var el_300x600 = iframe.contentWindow.document.getElementById('iframe-300x600'),
            el_300x250 = iframe.contentWindow.document.getElementById('iframe-300x250'),
            el_728x90 = iframe.contentWindow.document.getElementById('iframe-728x90'),
            el_970x250 = iframe.contentWindow.document.getElementById('iframe-970x250');

        el_300x600.src = '';
        el_300x250.src = '';
        el_728x90.src = '';
        el_970x250.src = '';

        for (var i = 0; i < xLength; i++) {
            if (i == index) {
                x[i].style.color = '#6699cc';
                y[i].style.color = '#6699cc';
            } else {
                x[i].style.color = '#ffffff';
                y[i].style.color = '#ffffff';
            }
        }

        alert('Mock will open on new tab!');

        window.open(src);

    }

    switch (itemID) {
        case 'id1':

            changeSrc('', '../ads/animated/300x250/index.html', '', '', 0);

            break;
        case 'id2':

            changeSrc('../ads/isi/300x600/index.html', '../ads/isi/300x250/index.html', '../ads/isi/728x90/index.html', '', 1);

            break;
        case 'id3':

            changeSrc('../ads/gwd/300x600/index.html', '', '', '', 2);

            break;
        case 'id4':

            changeSrc('../ads/cube/300x600/index.html', '../ads/cube/300x250/index.html', '', '../ads/cube/970x250/index.html', 3);

            break;
        case 'id5':

            openNew('../ads/twc/mwim/index.html#adstest+cld+D+sm+1+o', 4);

            break;
        default:

            el_300x600.src = '';
            el_300x250.src = '';
            el_728x90.src = '';
            el_970x250.src = '';

            for (var i = 0; i < xLength; i++) {

                x[i].style.color = '#ffffff';
                y[i].style.color = '#ffffff';

            }

            break;
    }

    if (mode == 'mobile') {
        mobileCollapse();
    }

    return itemID;
}