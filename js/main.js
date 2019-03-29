$(document).ready(function () {

    var solid = new Solid(new THREE.TetrahedronGeometry(100, 0));
    var pages = [
        {
            'Name': "Tetraedro",
            'id': "tetraedro",
            'linkid': "linkTetraedro",
            'render': function () {
                return new Solid(new THREE.TetrahedronGeometry(100, 0));
            }
        }, {
            'Name': "Esaedro",
            'id': "esaedro",
            'linkid': "linkEsaedro",
            'render': function () {
                return new Solid(new THREE.CubeGeometry(100, 100, 100));
            }
        }, {
            'Name': "Ottaedro",
            'id': "ottaedro",
            'linkid': "linkOttaedro",
            'render': function () {
                return new Solid(new THREE.OctahedronGeometry(100, 0));
            }
        }, {
            'Name': "Dodecaedro",
            'id': "dodecaedro",
            'linkid': "linkDodecaedro",
            'render': function () {
                return new Solid(new THREE.DodecahedronGeometry(100, 0));
            }
        }, {
            'Name': "Icosaedro",
            'id': "icosaedro",
            'linkid': "linkIcosaedro",
            'render': function () {
                return new Solid(new THREE.IcosahedronGeometry(100, 0));
            }
        }
    ];

    setPage(0);
    render(solid);

    $(document)
        .on('click', '.solidlink', function () {
            pos = 0;
            pages.forEach((page, index) => {
                if (page.linkid == $(this).attr('id'))
                    pos = index;
            });
            setPage(pos);
        }).on('change', '.solidColor', function () {            
            solid.object.material.color = new THREE.Color($(this).val());
            solid.object.material.specular = new THREE.Color($(this).val());
        });

    function setPage(pos) {
        pages.forEach(page => {
            $('#' + page.id).hide();
            $('#' + page.linkid).parent().removeClass('active');
            $('.solido').empty();
        });
        $('#' + pages[pos].id).show();
        $('#' + pages[pos].linkid).parent().addClass('active');
        solid = pages[pos].render();
        $('#' + pages[pos].id + ' .solido').append(solid.renderer.domElement);
    }

    function render() {
        requestAnimationFrame(render);
        solid.render();
        solid.update();
    }

});