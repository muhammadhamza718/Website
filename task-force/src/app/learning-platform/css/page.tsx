"use client";
import { useState } from "react";

// Import all exercise components
import FadeExercise from "./components/Animation-section/FadeExercises";
import SlideExercise from "./components/Animation-section/SlideExercises";
import BounceExercise from "./components/Animation-section/BounceExercises";
import SpinExercise from "./components/Animation-section/SpinExercises";
import ScaleExercise from "./components/Animation-section/ScaleExercises";
import WobbleExercise from "./components/Animation-section/WobbleExercises";
import PulseExercise from "./components/Animation-section/PulseExercises";
import RubberBandExercise from "./components/Animation-section/RubberBandExercises";
import ShakeExercise from "./components/Animation-section/ShakeExercises";
import JelloExercise from "./components/Animation-section/JelloExercises";

// Import all flexbox exercise components
import AlignItemExercises from "./components/Flexbox-section/AlignItemsExercises";
import CenteringExercises from "./components/Flexbox-section/CenteringExercises";
import FlexBasisExercises from "./components/Flexbox-section/FlexBasisExercises";
import FlexGrowExercises from "./components/Flexbox-section/FlexGrowExercises";
import FlexShrinkExercises from "./components/Flexbox-section/FlexShrinkExercises";
import FlexStartExercises from "./components/Flexbox-section/FlexStartExercises";
import GapExercises from "./components/Flexbox-section/GapExercises";
import JustifyContentExercises from "./components/Flexbox-section/JustifyContentExercises";
import OrderExercises from "./components/Flexbox-section/OrderExercises";
import WrapExercises from "./components/Flexbox-section/WrapExercises";

// Import all grid exercise components
import GridTemplateColumnsExercises from "./components/Grid-section/GridTemplateColumns";
import GridTemplateRowsExercises from "./components/Grid-section/GridTemplateRows";
import GridGapExercises from "./components/Grid-section/GridGap";
import GridItemPlacementExercises from "./components/Grid-section/GridItemPlacement";
import GridTemplateAreasExercises from "./components/Grid-section/GridTemplateAreas";
import GridAutoFlowExercises from "./components/Grid-section/GridAutoFlow";
import ResponsiveLayout from "./components/Grid-section/ResponsiveGridLayout";
import AlignmentExample from "./components/Grid-section/GridAlignment";
import NestedGridExample from "./components/Grid-section/GridNestedLayout";
import TemplateColumnsDenseExample from "./components/Grid-section/GridTemplateColumnsDense";

// Responsive Design exercises
import ResponsiveBreakpoints from "./components/Responsive-Design-section/ResponsiveBreakpoints";
import ResponsiveFlexbox from "./components/Responsive-Design-section/ResponsiveFlexbox";
import ResponsiveGrid from "./components/Responsive-Design-section/ResponsiveGrid";
import MediaQueries from "./components/Responsive-Design-section/MediaQueries";
import FluidTypography from "./components/Responsive-Design-section/FluidTypography";
import ResponsiveImages from "./components/Responsive-Design-section/ResponsiveImages";
import ContainerQueries from "./components/Responsive-Design-section/ContainerQueries";
import ResponsiveUtilities from "./components/Responsive-Design-section/ResponsiveUtilities";

// Topics and exercises
const topics = [
  {
    name: "Animations",
    exercises: [
      "Fade", "Slide", "Bounce", "Spin", "Scale", "Wobble", "Pulse", "RubberBand", "Shake", "Jello"
    ]
  },
  {
    name: "Flexbox",
    exercises: [
      "AlignItems", "Centering", "FlexBasis", "FlexGrow", "FlexShrink", "FlexStart", "Gap", "JustifyContent", "Order", "Wrap"
    ]
  },
  {
    name: "Grid Layout",
    exercises: [
      "TemplateColumns", "TemplateRows", "GridGap", "ItemPlacement", "TemplateAreas", "AutoFlow", "ResponsiveLayout", "Alignment", "NestedLayout", "TemplateColumnsDense"
    ]
  },
  {
    name: "Responsive Design",
    exercises: [
      "ResponsiveBreakpoints",
      "ResponsiveFlexbox",
      "ResponsiveGrid",
      "MediaQueries",
      "FluidTypography",
      "ResponsiveImages",
      "ContainerQueries",
      "ResponsiveUtilities"
    ]
  }

  
];

export default function CSSCourse() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const renderExercise = () => {
    if (selectedTopic === "Animations") {
      switch (selectedExercise) {
        case "Fade": return <FadeExercise />;
        case "Slide": return <SlideExercise />;
        case "Bounce": return <BounceExercise />;
        case "Spin": return <SpinExercise />;
        case "Scale": return <ScaleExercise />;
        case "Wobble": return <WobbleExercise />;
        case "Pulse": return <PulseExercise />;
        case "RubberBand": return <RubberBandExercise />;
        case "Shake": return <ShakeExercise />;
        case "Jello": return <JelloExercise />;
        default: return null;
      }
    } else if (selectedTopic === "Flexbox") {
      switch (selectedExercise) {
        case "AlignItems": return <AlignItemExercises />;
        case "Centering": return <CenteringExercises />;
        case "FlexBasis": return <FlexBasisExercises />;
        case "FlexGrow": return <FlexGrowExercises />;
        case "FlexShrink": return <FlexShrinkExercises />;
        case "FlexStart": return <FlexStartExercises />;
        case "Gap": return <GapExercises />;
        case "JustifyContent": return <JustifyContentExercises />;
        case "Order": return <OrderExercises />;
        case "Wrap": return <WrapExercises />;
        default: return null;
      }
    } else if (selectedTopic === "Grid Layout") {
      switch (selectedExercise) {
        case "TemplateColumns": return <GridTemplateColumnsExercises />;
        case "TemplateRows": return <GridTemplateRowsExercises />;
        case "GridGap": return <GridGapExercises />;
        case "ItemPlacement": return <GridItemPlacementExercises />;
        case "TemplateAreas": return <GridTemplateAreasExercises />;
        case "AutoFlow": return <GridAutoFlowExercises />;
        case "ResponsiveLayout": return <ResponsiveLayout />;
        case "Alignment": return <AlignmentExample />;
        case "NestedLayout": return <NestedGridExample />;
        case "TemplateColumnsDense": return <TemplateColumnsDenseExample />;
        default: return null;
      }
    } else if (selectedTopic === "Responsive Design") {
      switch (selectedExercise) {
        case "ResponsiveBreakpoints": return <ResponsiveBreakpoints />;
        case "ResponsiveFlexbox": return <ResponsiveFlexbox />;
        case "ResponsiveGrid": return <ResponsiveGrid />;
        case "MediaQueries": return <MediaQueries />;
        case "FluidTypography": return <FluidTypography />;
        case "ResponsiveImages": return <ResponsiveImages />;
        case "ContainerQueries": return <ContainerQueries />;
        case "ResponsiveUtilities": return <ResponsiveUtilities />;
        default: return null;
      }
    }
  };

  return (
    <div className="min-h-screen p-8 pt-24 text-white">
      <h1 className="text-4xl font-bold mb-4">Advanced CSS Course</h1>
      <p className="text-lg mb-8">Welcome to the Advanced CSS course! Choose a topic below to get started:</p>

      <div className="mb-8">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => {
              setSelectedTopic(topic.name);
              setSelectedExercise(null); // Reset selected exercise
            }}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 active:bg-red-600 text-white rounded mr-4 my-2"
          >
            {topic.name}
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">{selectedTopic}</h2>
          <div className="mb-8">
            {topics
              .find((topic) => topic.name === selectedTopic)
              ?.exercises.map((exercise) => (
                <button
                  key={exercise}
                  onClick={() => setSelectedExercise(exercise)}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 active:bg-red-600 text-white rounded mr-4 my-2"
                >
                  {exercise}
                </button>
              ))}
          </div>

          {selectedExercise && (
            <div>
              {renderExercise()}
              <button
                onClick={() => setSelectedExercise(null)}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white px-4 py-2 rounded mt-4"
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
