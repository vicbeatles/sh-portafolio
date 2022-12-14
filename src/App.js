import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Start from "./pages/Start"
import Layout from './components/Layout'
import AboutMe from './pages/AboutMe/AboutMe';
import MyWork from './pages/MyWork';
import WorkAreas from './pages/WorkAreas';
import PhotoAreas from './pages/PhotoAreas/PhotoAreas';
import PhotoProducts from './pages/PhotoProducts/PhotoProducts';
import ProductJewelry from './pages/ProductJewelry/ProductJewelry';
import ProductBoones from './pages/ProductBoones/ProductBoones';
import ProductCandy from './pages/ProductCandy/ProductCandy';
import ProductWatch from './pages/ProductWatch/ProductWatch';
import ProductSoap from './pages/ProductSoap/ProductSoap';
import ProductBrand from './pages/ProductBrand/ProductBrand';
import ProductFlowers from './pages/ProductFlowers/ProductFlowers';
import ProductRing from './pages/ProductRing/ProductRing';
import PhotoDocument from './pages/PhotoDocument/PhotoDocument';
import DocEiffel from './pages/DocEiffel/DocEiffel';
import DocMarry from './pages/DocMarry';
import DocMusician from './pages/DocMusician/DocMusician';
import DocMusic from './pages/DocMusic/DocMusic';
import DocAge from './pages/DocAge';
import DocPrison from './pages/DocPrison/DocPrison';
import Design from './pages/Design/Design';
import DesignBillboard from './pages/DesignBillboard/DesignBillboard';
import DesignCatFood from './pages/DesignCatFood/DesignCatFood';
import DesignScene from './pages/DesignScene';
import DesignBread from './pages/DesignBread/DesignBread';
import Ux from './pages/Ux/Ux';
import ThreeDim from './pages/ThreeDim/ThreeDim';
import ThreeDimJapan from './pages/ThreeDimJapan/ThreeDimJapan';
import ThreeDimHalloween from './pages/ThreeDimHalloween/ThreeDimHalloween';
import ThreeDimDices from './pages/ThreeDimDices/ThreeDimDices';
import Contact from './pages/Contact/Contact';


function App() {

  const [where,setWhere] = useState('ninguno')


  return (
    <Router>
            <Routes>
                <Route element={<Layout where={where} setWhere={setWhere} />}>
                    <Route path=":inicio" element={<Start />} />
                    <Route path="/aboutme" element={<AboutMe where={where} setWhere={setWhere} />} />
                    <Route path="/mywork" element={<MyWork where={where} setWhere={setWhere}/>} />
                    <Route path="/mywork/areas" element={<WorkAreas where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo" element={<PhotoAreas where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product" element={<PhotoProducts where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/jewelry" element={<ProductJewelry where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/boones" element={<ProductBoones where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/candy" element={<ProductCandy where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/watch" element={<ProductWatch where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/soap" element={<ProductSoap where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/brand" element={<ProductBrand where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/flowers" element={<ProductFlowers where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/product/ring" element={<ProductRing where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental" element={<PhotoDocument where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/eiffel" element={<DocEiffel where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/marry" element={<DocMarry where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/musician" element={<DocMusician where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/music" element={<DocMusic where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/age" element={<DocAge where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/photo/documental/prison" element={<DocPrison where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/design" element={<Design where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/design/billboard" element={<DesignBillboard where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/design/cat-food" element={<DesignCatFood where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/design/scene" element={<DesignScene where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/design/bread" element={<DesignBread where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/ux" element={<Ux where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/threedim" element={<ThreeDim where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/threedim/japan" element={<ThreeDimJapan where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/threedim/halloween" element={<ThreeDimHalloween where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/threedim/dices" element={<ThreeDimDices where={where} setWhere={setWhere} />} />
                    <Route path="/mywork/areas/contact" element={<Contact where={where} setWhere={setWhere} />} />
                </Route>
                <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
        </Router>
  );
}

export default App;
