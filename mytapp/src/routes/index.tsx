
import { Routes, Route } from "react-router-dom";
import DocsLayout from "../layouts/docs_layout";
import { Home } from "../pages/home";
import UseStatePage from "../hooks/use_state";
import { NotFound } from "../pages/not_found";
import UseEffectPage from "../hooks/use_effect";
import {BrokenExample,UseRefPage} from "../hooks/use_ref";
import UseContextPage from "../hooks/use_context";
import UseReducerPage from "../hooks/user_reducer";
import UseMemoPage from "../hooks/use_memo";
import UseCallbackPage from "../hooks/use_callback";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    
    <Route path="/broken" element={<BrokenExample />} />
      
      <Route path="/hooks" element={<DocsLayout />}>
        <Route path="use-state" element={<UseStatePage />} />
        <Route path="use-effect" element={<UseEffectPage />} />
        <Route path="use-reducer" element={<UseReducerPage />} />
        <Route path="use-ref" element={<UseRefPage />} />
        <Route path="use-context" element={<UseContextPage />} />
        <Route path="use-memo" element={<UseMemoPage />} />
        <Route path="use-callback" element={<UseCallbackPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;