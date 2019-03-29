class Solid {

    constructor(Geometry) {        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.scene = new THREE.Scene();

        this.scene.add(this.camera);
        this.scene.background = new THREE.Color(0xffffff);
        this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        this.camera.position.z = 200;

        // Material
        this.SolidMat = new THREE.MeshPhongMaterial({
            color: new THREE.Color("rgb(0,228,190)"),
            emissive: new THREE.Color("rgb(0,0,0)"),
            specular: new THREE.Color("rgb(0,228,190)")
        });
        this.LineMat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 4 });

        this.L1 = new THREE.PointLight(0xDDDDDD, 1);
        this.L1.position.z = 100;
        this.L1.position.y = 100;
        this.L1.position.x = 100;
        this.scene.add(this.L1);

        this.L2 = new THREE.PointLight(0xDDDDDD, 1);
        this.L2.position.z = 200;
        this.L2.position.y = 50;
        this.L2.position.x = -100;
        this.scene.add(this.L2);

        this.object = new THREE.Mesh(Geometry, this.SolidMat);
        this.object.rotation.z = 0.5;
        this.scene.add(this.object);

        this.geo = new THREE.EdgesGeometry(this.object.geometry);
        this.wireframe = new THREE.LineSegments(this.geo, this.LineMat);
        this.wireframe.renderOrder = 1;
        this.object.add(this.wireframe);
    }

    update() {
        this.object.rotation.x += 1 / 100;
        this.object.rotation.y += 1  / 100;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    html() {
        return this.renderer.domElement;
    }

}
