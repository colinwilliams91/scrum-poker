[Atlassian Jira Blog](https://www.atlassian.com/blog/platform/scrum-poker-for-agile-projects)

_This should be played for each Sprint Estimation, after the value of a story point has been decided (by team)_
# Key
| Term | Definition |
| ---- | ---- |
| **Host** | Product Owner/Project Manager |
| **Player** | PO, PM, SA, Designer, Dev, QA |
| **Card** | Story Point (one of each value) |
| **Hand** | All **Cards** to choose from each **Turn** |
| **Round** | One Sprint, assigned a **Total** |
| **Total** | The total **Card**/Point Value for a **Round**/Sprint |
| **Tally** | Each **Turn** add the final **Bet** till **Tally** == **Total** |
| **Game** | How many **Rounds**/Sprints will be planned |
| **Turn** | The time given to a single **Draw** |
| **Draw** | The Backlog Item/User Story in play |
| **Deck** | Each **Draw** comes from this Imported Backlog |
| **Bet** | Each **Player** will privately estimate a **Card** |
| **Show** | All **Players** reveal their **Bets**/Estimated Points |
| **Consensus** | If their is a majority of any **Bet** |
# Summary
- **Prerequisites**:
	- Team determines before play how many points are expected per Sprint (_what the value of a point is?_)
- **Host** enters how many **Cards** a **Hand** will have
	- Every **Player** will get a **Hand** of **Cards**, one for each story point. 
	- 0, 1, 2, 3, 5, 8, 13, 20, 40, 100 **(this would be a 10 card hand)**
	- 1, 2, 4, 8, 16 (up to max allotted) **(this would be a 5 card hand)**
- **Host** enters how many points make a Sprint (**Round**)
- **Host** enters how many Sprints they are planning for (how many **Rounds** the **Game** will have/Game might not clear the entire backlog)
- Host imports the Product Backlog (How many tickets to plan/the **Deck**)
- **GAME:** *The Phases (**Game** starts here)*
- **ROUND:** Begins (`foreach (Round in Game)`) (*One Sprint*)
	- **TURN**: Begins (One User Story will be estimated)
		- **DRAW:** One **Draw** comes from the imported Backlog (**Deck**)
		- It is presented (or read by **Host**) to all **Players**
		- Time is given to ask questions and discuss the User Story/Item (**Draw**)
		- **BET:** Each player privately selects a **Card** from their **Hand** to claim their estimation for the Story/**Draw**
		- **SHOW:** All **Player** **Bets** are revealed
			- Time is given to further discuss
			- If there is a **Consensus**, every **Bet** above or below gets to make their case for their estimation
			- Repeat **BET** and **SHOW** phases until all **Players** agree on a single **Bet** for the **Draw**
		- Add agreed upon **Bet** to the **Round's** **Tally**
	- Repeat **TURN** with new **Draw** until **Tally** == **Total**
- **Round** End (***Game** may end here*)
- Repeat **Round** if there are more Sprints to estimate/more Backlog Items in the **Deck** that need to be estimated

---
## How does planning poker work?

>At the beginning of a poker planning session, the product owner or customer reviews an agile user story and reads it aloud. A [user story](https://www.atlassian.com/agile/project-management/user-stories) is a general and informal explanation of a software feature that describes how it will offer value to the end-user (i.e. the customer).

### Step 1: Hand out the cards to participants

**Distribute an identical deck of cards to everybody. Each one has a number that the team has agreed to use as their estimate.** Each player should have a deck consisting of different numbers. Cohn recommended a sequence of 0, 1, 2, 3, 5, 8, 13, 20, 40, and 100. 

Other common sequences include doubling the next number (e.g. 1, 2, 4, 8, and so on). **These values can represent a number of things: the number of story points, ideal days, or other units that the team uses for estimation.**

The decks are intentionally kept minimal with considerable number-jumps. Doing this ensures that for each story, everyone can reach a consensus number. Otherwise, if they have a card for each number from one to 50, the process would be painfully slow.

### Step 2: Read the story out loud

**The moderator (either the product owner or product manager) narrates the story to the group. If participants have any questions, the moderator answers them.**

### Step 3: Discuss the story

**Once the group finishes listening to the story, everyone shares their views on it.** Some of these discussion points will likely include:

- **How should we handle the work?**
- **How many people are expected to get involved?**
- **What skills will be needed to work on the story?**
- **How should we tackle any roadblocks that delay progress?**

**The group will also try to learn more about the story and ask questions to understand it better.**

### Step 4: Select and share

**After the discussion, each person will privately select a card from the deck.** Usually, it’s used to show an estimate of story points (but can also be used to represent the number of ideal days). **Once everyone selects a card, they show them at the same time.**

**If a player shows a higher card, it conveys that the story will be completed with greater difficulty and take a longer period to complete.** Keep in mind that it’s common for estimates to vary a lot.

### Step 5: Reach a consensus

**When team members show the same card, that number turns into a consensus.** Now, the group can move forward and work on the next story.

**However, if the cards continue to vary, then further discussions on the story will follow. Participants with higher or lower estimates than others will communicate their points of view. Then, they’ll attempt to convince their teammates to understand their differing numbers.**

**Once this new deliberation ends, everyone will go through their deck and show them again.** If a participant continues to agree with their last choice, then they will repeat the card or eventually choose a new one.

**Usually, the estimates start to converge after the second round. If not, then the process repeats itself until the team agrees on a single number.**

## When to hold a planning poker session

**Usually, teams arrange a session after creating the initial backlog.** Although sessions can sometimes take more than one day, it leads to the development of initial estimates that are helpful in sizing or scoping the project.

**Items are added to the product backlog incrementally throughout the project’s lifespan. That’s why it’s usually more convenient for teams to conduct sessions once per iteration.** In most cases, this happens some days after the iteration ends. Similarly, it also occurs right after a daily standup (a type of agile meeting) because the entire team is present.


## GitHub App
- If wanting to make an App for GitHub (Marketplace?) to interact with GH REST API (Projects, Issues, etc):
	- [This step from the Respond to Webhooks Tutorial](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events#add-code-to-respond-to-webhook-events)
