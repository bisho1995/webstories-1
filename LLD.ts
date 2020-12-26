/**
This is an attempt to create the LLD of Web Stories

Feature requirements:
1. It should have a cube UI, without top and bottom
2. Cube like UI when faces of the cube change
3. Each face will have timeout post that next face will show up.
4. Each face can have multiple image with multiple timeers
5. There can be any number of action items on each of the image
 */

class WebStoriesManager {
  private stories: Story[];
  private timeout: number;
  private cube: Cube;
  private onDone: Function;
  private onTransition: Function;
  private loaderUI: JSX.Element;
  public setStories() {}
  public setOnDone() {}
  public setOnTransition() {}
  public setLoaderUI() {}
  public setCustomHeader() {}
}
interface IStoryWithTimer {
  story: Story;
  timer: Timer;
}
enum StoryAnimationStatus {
  LOADING = "LOADING",
  ONGOING = "ONGOING",
  PAUSED = "PAUSED",
  FINISH = "FINISH",
}
class Cube {
  private storyWithTimers: Array<IStoryWithTimer>;
  private currentStory: number;
  private currentIdxOfStory: number;
  private storyAnimationStatus: StoryAnimationStatus;
  private loaderUI: JSX.Element;
  onRightPortionClick() {}
  onLeftPortionClick() {}
  showNextFace() {}
  showPreviousFace() {}
  showNextImage() {}
  showPreviousImage() {}
  getTotalFaceTimer() {}
  getLoadingStatus() {}
  setLoaderUI() {}
}
class Timer {}

interface IStory {
  storyType: StoryType;
  storiesUI: Array<JSX.Element>;
  requireTimer: boolean;
  setRequireTimer: Function;
}

enum StoryType {
  SINGLE = "SINGLE",
  GROUPED = "GROUPED",
}

class Story implements IStory {
  requireTimer: boolean;
  setRequireTimer() {}
  public storyType: StoryType;
  public storiesUI: JSX.Element[];

  public setStoryType() {}
  public setStoryUI() {}
}
