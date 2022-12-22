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

function App() {
  return (
    <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/inicio" element={<Start />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/mywork" element={<MyWork />} />
                    <Route path="/mywork/areas" element={<WorkAreas />} />
                    <Route path="/mywork/areas/photo" element={<PhotoAreas />} />
                    <Route path="/mywork/areas/photo/product" element={<PhotoProducts />} />
                    <Route path="/mywork/areas/photo/product/jewelry" element={<ProductJewelry />} />
                    <Route path="/mywork/areas/photo/product/boones" element={<ProductBoones />} />
                    <Route path="/mywork/areas/photo/product/candy" element={<ProductCandy />} />
                    <Route path="/mywork/areas/photo/product/watch" element={<ProductWatch />} />
                    <Route path="/mywork/areas/photo/product/soap" element={<ProductSoap />} />
                    <Route path="/mywork/areas/photo/product/brand" element={<ProductBrand />} />
                    <Route path="/mywork/areas/photo/product/flowers" element={<ProductFlowers />} />
                    <Route path="/mywork/areas/photo/product/ring" element={<ProductRing />} />
                    <Route path="/mywork/areas/photo/documental" element={<PhotoDocument />} />
                    <Route path="/mywork/areas/photo/documental/eiffel" element={<DocEiffel />} />
                    <Route path="/mywork/areas/photo/documental/marry" element={<DocMarry />} />
                    <Route path="/mywork/areas/photo/documental/musician" element={<DocMusician />} />
                    <Route path="/mywork/areas/photo/documental/music" element={<DocMusic />} />
                    <Route path="/mywork/areas/photo/documental/age" element={<DocAge />} />
                    <Route path="/mywork/areas/photo/documental/prison" element={<DocPrison />} />
                    <Route path="/mywork/areas/design" element={<Design />} />
                    <Route path="/mywork/areas/design/billboard" element={<DesignBillboard />} />
                    <Route path="/mywork/areas/design/cat-food" element={<DesignCatFood />} />
                    <Route path="/mywork/areas/design/scene" element={<DesignScene />} />
                    <Route path="/mywork/areas/design/bread" element={<DesignBread />} />
                    <Route path="/mywork/areas/ux" element={<Ux />} />
                </Route>
                <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
        </Router>
  );
}

export default App;
