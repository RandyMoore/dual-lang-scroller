## 1. Update Content API

- [ ] 1.1 Modify `src/api/content.ts` to read all `.txt` files from content directory
- [ ] 1.2 Update API handler to iterate through all matching English and Spanish file pairs
- [ ] 1.3 Change API response to return array of content items instead of single item
- [ ] 1.4 Add validation to skip files without matching English and Spanish pairs

## 2. Update Landing Page

- [ ] 2.1 Modify `src/views/LandingPage.vue` to handle array of content items
- [ ] 2.2 Update content items mapping to use array from API response
- [ ] 2.3 Ensure each item's ID is used for navigation

## 3. Update Unit Tests

- [ ] 3.1 Update `tests/unit/content.test.ts` to expect array of content items
- [ ] 3.2 Add test cases for multiple content files scenario
- [ ] 3.3 Add test cases for incomplete file pairs

## 4. Verification

- [ ] 4.1 Run `npm run dev` and verify both `content.txt` and `example.txt` appear on landing page
- [ ] 4.2 Verify clicking on each content item navigates to the correct content viewer
- [ ] 4.3 Run `npm run test` to ensure all unit tests pass
- [ ] 4.4 Run `npm run test:e2e` to ensure end-to-end tests pass